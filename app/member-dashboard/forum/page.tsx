import { prisma } from "@/app/utils/db.server";
import { MemberForumClient } from "./MemberForumClient";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textile Engineers Q&A Forum - ITET Bangladesh",
  description: "Official professional discourse and technical problem solving forum for verified ITET members.",
};

export const dynamic = "force-dynamic";

export default async function MemberForumPage() {
  const session = await getSession();
  if (!session) {
    redirect("/membership-login");
  }

  const currentMember = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { email: true },
  });

  if (!currentMember) {
    redirect("/membership-login");
  }

  const rawPosts = await prisma.qaPost.findMany({
    include: {
      user: {
        include: {
          memberProfile: true,
        },
      },
      replies: {
        include: {
          user: {
            include: {
              memberProfile: true,
            },
          },
        },
        orderBy: { createdAt: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const serializedPosts = rawPosts.map((p) => ({
    id: p.id,
    title: p.title,
    content: p.content,
    category: p.category,
    tags: p.tags,
    likesCount: p.likesCount,
    flagged: p.flagged,
    createdAt: p.createdAt.toISOString(),
    user: p.user
      ? {
          memberProfile: p.user.memberProfile
            ? {
                fullName: p.user.memberProfile.fullName,
                batch: p.user.memberProfile.batch,
                institute: p.user.memberProfile.institute,
                presentAddressZone: p.user.memberProfile.presentAddressZone,
                membershipType: p.user.memberProfile.membershipType,
              }
            : null,
        }
      : null,
    replies: p.replies.map((r) => ({
      id: r.id,
      content: r.content,
      likesCount: r.likesCount,
      createdAt: r.createdAt.toISOString(),
      user: r.user
        ? {
            memberProfile: r.user.memberProfile
              ? {
                  fullName: r.user.memberProfile.fullName,
                  batch: r.user.memberProfile.batch,
                }
              : null,
          }
        : null,
    })),
  }));

  return (
    <MemberForumClient
      currentMember={currentMember || { email: "member@itetbd.net" }}
      dbPosts={serializedPosts}
    />
  );
}
