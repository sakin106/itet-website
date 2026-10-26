import { prisma } from "@/app/utils/db.server";
import { ClientPortalClient } from "./ClientPortalClient";
import { getSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Client Portal - ITET Bangladesh",
  description: "ITET Bangladesh corporate client self-service portal for recruitment, job circulars, and advertising placements.",
};

export const dynamic = "force-dynamic";

export default async function ClientPortalPage() {
  const session = await getSession();
  if (!session) {
    redirect("/membership-login");
  }

  const clientUser = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, email: true, role: true },
  });

  if (!clientUser) {
    redirect("/membership-login");
  }

  const rawJobs = clientUser
    ? await prisma.jobOpportunity.findMany({
        where: { postedById: clientUser.id },
        orderBy: { createdAt: "desc" },
      })
    : [];

  const rawAds = clientUser
    ? await prisma.adBanner.findMany({
        where: { uploadedById: clientUser.id },
        orderBy: { createdAt: "desc" },
      })
    : [];

  const serializedJobs = rawJobs.map((j) => ({
    id: j.id,
    title: j.title,
    companyName: j.companyName,
    jobLocation: j.jobLocation,
    employmentType: j.employmentType,
    salaryRange: j.salaryRange,
    description: j.description,
    applicationDeadline: j.applicationDeadline ? j.applicationDeadline.toISOString() : null,
    approvalStatus: j.approvalStatus,
  }));

  const serializedAds = rawAds.map((a) => ({
    id: a.id,
    title: a.title,
    clientName: a.clientName,
    placement: a.placement,
    aspectRatio: a.aspectRatio,
    imageUrl: a.imageUrl,
    targetUrl: a.targetUrl,
    durationDays: a.durationDays,
    impressionsCount: a.impressionsCount,
    clicksCount: a.clicksCount,
    approvalStatus: a.approvalStatus,
  }));

  return (
    <ClientPortalClient
      clientUser={clientUser ? { email: clientUser.email, role: clientUser.role } : null}
      jobs={serializedJobs}
      ads={serializedAds}
    />
  );
}
