import { prisma } from "@/app/utils/db.server";
import { AdminDashboardClient } from "./AdminDashboardClient";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - ITET Bangladesh Secretariat",
  description: "ITET Bangladesh administrative portal and membership verification queue.",
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") {
    redirect("/membership-login");
  }

  const adminUser = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { email: true, role: true },
  });

  if (!adminUser || adminUser.role !== "ADMIN") {
    redirect("/membership-login");
  }

  const pendingProfiles = await prisma.memberProfile.findMany({
    where: { approvalStatus: "PENDING" },
    include: {
      user: {
        select: { email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const verifiedMembersCount = await prisma.memberProfile.count({
    where: { approvalStatus: "APPROVED" },
  });
  const pendingApprovalsCount = await prisma.memberProfile.count({
    where: { approvalStatus: "PENDING" },
  });
  const activeAdsCount = await prisma.adBanner.count({
    where: { approvalStatus: "APPROVED" },
  });
  const upcomingEventsCount = await prisma.event.count({
    where: { isPublished: true },
  });
  const pendingJobsCount = await prisma.jobOpportunity.count({
    where: { approvalStatus: "PENDING" },
  });

  const serializedPendingProfiles = pendingProfiles.map((p) => ({
    id: p.id,
    memberId: p.memberId,
    fullName: p.fullName,
    user: p.user ? { email: p.user.email } : null,
    phone: p.phone,
    institute: p.institute,
    batch: p.batch,
    admissionSession: p.admissionSession,
    presentAddressZone: p.presentAddressZone,
    membershipType: p.membershipType,
    approvalStatus: p.approvalStatus,
    createdAt: p.createdAt.toISOString(),
    certDocUrl: p.certDocUrl,
  }));

  return (
    <AdminDashboardClient
      adminUser={adminUser || { email: "sakin5140@gmail.com", role: "ADMIN" }}
      pendingProfiles={serializedPendingProfiles}
      verifiedMembersCount={verifiedMembersCount}
      pendingApprovalsCount={pendingApprovalsCount}
      activeAdsCount={activeAdsCount}
      upcomingEventsCount={upcomingEventsCount}
      pendingJobsCount={pendingJobsCount}
    />
  );
}
