import { prisma } from "@/app/utils/db.server";
import { MemberDashboardClient } from "./MemberDashboardClient";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Dashboard - ITET Bangladesh",
  description: "ITET Bangladesh verified member portal, membership ID card, and directory.",
};

export const dynamic = "force-dynamic";

export default async function MemberDashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/membership-login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: {
      memberProfile: true,
      eventRegistrations: {
        include: {
          event: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/membership-login");
  }


  const directoryProfiles = await prisma.memberProfile.findMany({
    where: {
      approvalStatus: "APPROVED",
    },
    orderBy: { fullName: "asc" },
  });

  const forumPosts = await prisma.qaPost.findMany({
    include: {
      user: {
        include: {
          memberProfile: true,
        },
      },
      replies: true,
    },
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  const serializedUser = user
    ? {
        email: user.email,
        memberProfile: user.memberProfile,
        eventRegistrations: user.eventRegistrations.map((reg) => ({
          id: reg.id,
          ticketNumber: reg.ticketNumber,
          paymentStatus: reg.paymentStatus,
          paymentAmount: reg.paymentAmount,
          event: {
            title: reg.event.title,
            venue: reg.event.venue,
            location: reg.event.location,
            startDate: reg.event.startDate.toISOString(),
          },
        })),
      }
    : null;

  const serializedDirectory = directoryProfiles.map((p) => ({
    memberId: p.memberId,
    fullName: p.fullName,
    batch: p.batch,
    admissionSession: p.admissionSession,
    institute: p.institute,
    designation: p.designation,
    company: p.company,
    presentAddressZone: p.presentAddressZone,
    membershipType: p.membershipType,
    approvalStatus: p.approvalStatus,
  }));

  const serializedPosts = forumPosts.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    content: p.content,
    createdAt: p.createdAt.toISOString(),
    likesCount: p.likesCount,
    user: p.user
      ? {
          email: p.user.email,
          memberProfile: p.user.memberProfile
            ? {
                fullName: p.user.memberProfile.fullName,
                batch: p.user.memberProfile.batch,
              }
            : null,
        }
      : null,
    replies: p.replies.map((r) => ({
      id: r.id,
      content: r.content,
      likesCount: r.likesCount,
      createdAt: r.createdAt.toISOString(),
    })),
  }));

  return (
    <MemberDashboardClient
      currentUser={serializedUser}
      directoryProfiles={serializedDirectory}
      forumPosts={serializedPosts}
    />
  );
}
