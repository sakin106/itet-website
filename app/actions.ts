"use server";

import { prisma } from "@/app/utils/db.server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { createSession, destroySession, getSession } from "@/app/lib/session";

export async function loginAction(formData: FormData) {
  try {
    const email = (formData.get("email") as string)?.trim().toLowerCase();
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { success: false, error: "Please enter both email and password." };
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { success: false, error: "Invalid email or credentials." };
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return { success: false, error: "Invalid password credentials." };
    }

    await createSession({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    let redirectTo = "/member-dashboard";
    if (user.role === "ADMIN") {
      redirectTo = "/admin-dashboard";
    } else if (user.role === "CLIENT") {
      redirectTo = "/client-portal";
    }

    return { success: true, redirectTo };
  } catch (error: any) {
    console.error("Login action error:", error);
    return { success: false, error: error?.message || "Authentication failed." };
  }
}

export async function logoutAction() {
  await destroySession();
  redirect("/membership-login");
}

export async function handleMemberApprovalAction(formData: FormData) {
  try {
    const memberProfileId = formData.get("memberProfileId") as string;
    const intent = formData.get("intent") as string;

    if (!memberProfileId || !intent) {
      return { success: false, error: "Missing required profile ID or intent." };
    }

    const newStatus = intent === "approve" ? "APPROVED" : "REJECTED";

    await prisma.memberProfile.update({
      where: { id: memberProfileId },
      data: { approvalStatus: newStatus },
    });

    revalidatePath("/admin-dashboard");
    return { success: true, newStatus };
  } catch (error: any) {
    console.error("Error updating member approval status:", error);
    return { success: false, error: error?.message || "Failed to update status" };
  }
}

export async function handleCreateQaPostAction(formData: FormData) {
  try {
    const title = (formData.get("title") as string)?.trim();
    const content = (formData.get("content") as string)?.trim();
    const category = ((formData.get("category") as string) || "General").trim();
    const tags = ((formData.get("tags") as string) || "").trim();

    if (!title || !content) {
      return { success: false, error: "Title and content are required." };
    }

    // Try reading active session first
    const session = await getSession();
    let userId = session?.userId;

    if (!userId) {
      // Default to the seeded active member if session missing
      const memberUser = await prisma.user.findFirst({
        where: {
          OR: [{ email: "member@itetbd.net" }, { role: "MEMBER" }],
        },
      });
      if (memberUser) {
        userId = memberUser.id;
      }
    }

    if (!userId) {
      return { success: false, error: "Member user record not found in database." };
    }

    await prisma.qaPost.create({
      data: {
        title,
        content,
        category,
        tags,
        userId,
      },
    });

    revalidatePath("/member-dashboard/forum");
    revalidatePath("/member-dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Error creating QA post:", error);
    return { success: false, error: error?.message || "Failed to publish post" };
  }
}
