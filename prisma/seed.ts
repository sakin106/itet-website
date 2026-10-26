import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting ITET database seed...");

  // 1. Clean up existing records in dependency order
  await prisma.qaLike.deleteMany({});
  await prisma.qaReply.deleteMany({});
  await prisma.qaPost.deleteMany({});
  await prisma.eventRegistration.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.jobOpportunity.deleteMany({});
  await prisma.adBanner.deleteMany({});
  await prisma.marketplacePrice.deleteMany({});
  await prisma.notice.deleteMany({});
  await prisma.publication.deleteMany({});
  await prisma.memberProfile.deleteMany({});
  await prisma.user.deleteMany({});

  // 2. Hash default passwords
  const salt = await bcrypt.genSalt(10);
  const adminPasswordHash = await bcrypt.hash("Sakin106", salt);
  const memberPasswordHash = await bcrypt.hash("Member@ITET2026!", salt);
  const clientPasswordHash = await bcrypt.hash("Client@ITET2026!", salt);

  // 3. Create ADMIN User
  const adminUser = await prisma.user.create({
    data: {
      email: "sakin5140@gmail.com",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
      isActive: true,
    },
  });
  console.log("✅ Admin user created: sakin5140@gmail.com");

  // 4. Create MEMBER User & MemberProfile (with Phase 2 fields)
  const memberUser = await prisma.user.create({
    data: {
      email: "member@itetbd.net",
      passwordHash: memberPasswordHash,
      role: "MEMBER",
      isActive: true,
      memberProfile: {
        create: {
          memberId: "LM-4082",
          membershipType: "LIFE",
          approvalStatus: "APPROVED",
          fullName: "Engr. Tanvir Ahmed",
          phone: "+880 1715-998822",
          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
          batch: "34th Batch",
          admissionSession: "2010-2011", // Phase 2 requirement
          passingYear: "2015",
          institute: "Bangladesh University of Textiles (BUTEX)",
          degree: "B.Sc. in Textile Engineering (Wet Processing)",
          presentAddressZone: "Dhaka North (Uttara Sector 11)", // Phase 2 requirement
          permanentDistrict: "Cumilla",
          bloodGroup: "B+",
          iebNo: "M-38291",
          company: "Square Fashions Ltd.",
          designation: "Assistant General Manager (R&D / Washing)",
          bio: "Textile engineer specializing in sustainable wet processing, ozone de-sizing, and enzyme bio-polishing technology.",
          certDocUrl: "B.Sc. in Textile Engineering Provisional Certificate",
        },
      },
    },
  });
  console.log("✅ Member user created: member@itetbd.net (LM-4082)");

  // 4b. Create PENDING Member Applicants for Admin Dashboard review
  const pendingApplicants = [
    {
      email: "sabbir.hossain@dbtex.com",
      memberId: "APP-2026-0891",
      fullName: "Md. Sabbir Hossain",
      phone: "+880 1718-445566",
      batch: "40th Batch",
      admissionSession: "2016-2017",
      institute: "Bangladesh University of Textiles (BUTEX)",
      degree: "B.Sc. in Textile Engineering",
      presentAddressZone: "Dhaka North (Uttara Sector 11)",
      category: "LIFE",
      certDocUrl: "B.Sc. in Textile Engineering Provisional Certificate",
    },
    {
      email: "nusrat.j@epicgroup.com",
      memberId: "APP-2026-0890",
      fullName: "Nusrat Jahan Chowdhury",
      phone: "+880 1819-332211",
      batch: "42nd Batch",
      admissionSession: "2018-2019",
      institute: "NITER (University of Dhaka)",
      degree: "B.Sc. in Textile Engineering (Fabric)",
      presentAddressZone: "Gazipur Industrial Zone",
      category: "GENERAL",
      certDocUrl: "Academic Transcript & Final Semester Marksheet",
    },
    {
      email: "mahbub.te@beximco.net",
      memberId: "APP-2026-0889",
      fullName: "Engr. Mahbubur Rahman",
      phone: "+880 1912-778899",
      batch: "36th Batch",
      admissionSession: "2012-2013",
      institute: "MBSTU (Textile Engineering)",
      degree: "B.Sc. in Textile Engineering",
      presentAddressZone: "Narayanganj Zone",
      category: "LIFE",
      certDocUrl: "IEB Membership Card & Service Verification Letter",
    },
    {
      email: "tanzeem.riad@aust.edu",
      memberId: "APP-2026-0888",
      fullName: "Tanzeem Ahmed Riad",
      phone: "+880 1611-998800",
      batch: "44th Batch",
      admissionSession: "2020-2021",
      institute: "Ahsanullah University of Science & Technology",
      degree: "B.Sc. in Textile Engineering (Apparel)",
      presentAddressZone: "Dhaka South (Gulshan)",
      category: "STUDENT",
      certDocUrl: "Current Student ID & Department Head Clearance",
    },
  ];

  for (const app of pendingApplicants) {
    await prisma.user.create({
      data: {
        email: app.email,
        passwordHash: memberPasswordHash,
        role: "MEMBER",
        isActive: true,
        memberProfile: {
          create: {
            memberId: app.memberId,
            membershipType: app.category,
            approvalStatus: "PENDING",
            fullName: app.fullName,
            phone: app.phone,
            batch: app.batch,
            admissionSession: app.admissionSession,
            institute: app.institute,
            degree: app.degree,
            presentAddressZone: app.presentAddressZone,
            certDocUrl: app.certDocUrl,
          },
        },
      },
    });
  }
  console.log("✅ Seeded 4 pending membership applicants");

  // 5. Create CLIENT User
  const clientUser = await prisma.user.create({
    data: {
      email: "client@squaregroup.com",
      passwordHash: clientPasswordHash,
      role: "CLIENT",
      isActive: true,
    },
  });
  console.log("✅ Client user created: client@squaregroup.com");

  // 6. Create Event & EventRegistration
  const event = await prisma.event.create({
    data: {
      title: "15th National Textile Convention 2026",
      slug: "national-textile-convention-2026",
      description:
        "The apex biennial assembly of textile engineers, industrialists, and policy researchers in Bangladesh. Highlights keynote papers on circular economy, automated spinning, and industrial zero-liquid discharge.",
      startDate: new Date("2026-11-15T09:00:00.000Z"),
      endDate: new Date("2026-11-16T18:00:00.000Z"),
      venue: "Bangabandhu International Conference Center (BICC), Dhaka",
      location: "Sher-e-Bangla Nagar, Agargaon, Dhaka",
      bannerUrl: "https://res.cloudinary.com/dov6k7xdk/image/upload/v1787392520/fchpbtayxgoihujbolap.jpg",
      registrationFee: 1500.0,
      maxCapacity: 1200,
      isPublished: true,
      isFeatured: true,
      registrations: {
        create: {
          userId: memberUser.id,
          ticketNumber: "ITET-NTC-1049",
          paymentStatus: "PAID",
          paymentAmount: 1500.0,
          checkedIn: false,
        },
      },
    },
  });
  console.log("✅ Event & registration created: " + event.title);

  // 7. Create Q&A Forum Posts & Replies
  const post1 = await prisma.qaPost.create({
    data: {
      title: "Optimal Liquor Ratio & Enzyme Wash parameters for 100% Lyocell Twill Fabrics?",
      content:
        "We are running high-density Lyocell twill woven fabric for European buyer audits. While applying neutral cellulase bio-polishing in front-loading washer machines, we observe micro-fibrillation streak marks under D65 light. What is the recommended liquor ratio and bath temperature curve to eliminate surface pilling without tensile loss?",
      category: "Dyeing & Finishing",
      tags: "Lyocell, Washing, Enzymes, Sustainable",
      userId: memberUser.id,
      likesCount: 18,
      replies: {
        create: [
          {
            content:
              "Keep the ML ratio at minimum 1:8 using lubricating anti-creasing agents (0.8 g/L). Maintain pH strictly at 5.8 to 6.2 with buffer and ramp up temperature no faster than 1.5°C/min. De-fibrillation works best when followed by a gentle silicone emulsion rinse.",
            userId: adminUser.id,
            likesCount: 7,
            isAccepted: true,
          },
        ],
      },
    },
  });

  const post2 = await prisma.qaPost.create({
    data: {
      title: "Rotor Spinning: Best practice settings for 20s Ne cotton-viscose blend yarns?",
      content:
        "Has anyone experienced rotor cup dusting when blending 30% Modal / Viscose staple with local Indian raw cotton? Seeking recommended opening roller clothing wire and navel type for Rieter R37 machines.",
      category: "Spinning & Yarn",
      tags: "Rotor Spinning, Cotton-Viscose, Twist Multiplier",
      userId: memberUser.id,
      likesCount: 12,
      replies: {
        create: [
          {
            content:
              "Use ceramic spiral grooved navels with OS21 clothing wire to minimize static fly deposition. Clean opening rolls every shift during humid weather.",
            userId: adminUser.id,
            likesCount: 5,
          },
        ],
      },
    },
  });
  console.log("✅ Forum posts & replies created: (" + post1.title.slice(0, 30) + "... & " + post2.title.slice(0, 30) + "...)");

  // 8. Create Job Opportunity (Client Portal)
  const job = await prisma.jobOpportunity.create({
    data: {
      title: "Senior Manager - Washing & Wet Processing (R&D)",
      companyName: "Square Fashions Ltd.",
      jobLocation: "Gazipur Industrial Zone",
      employmentType: "FULL_TIME",
      experience: "5-8 years",
      education: "B.Sc. in Textile Engineering (Wet Processing)",
      salaryRange: "120,000 - 160,000 BDT",
      description:
        "Lead industrial research and sustainable wet processing operations for top global brands. Manage ozone bleaching lines, laser distressing, and EIM certification metrics.",
      requirements:
        "Hands-on experience in Tonello / Jeanologia machinery, effluent treatment monitoring, and zero discharge hazardous chemical (ZDHC) standards.",
      applicationDeadline: new Date("2026-12-31T23:59:59.000Z"),
      contactEmail: "careers@squaregroup.com",
      approvalStatus: "APPROVED",
      postedById: clientUser.id,
    },
  });
  console.log("✅ Job opportunity created: " + job.title);

  // 9. Create Ad Banner (Client Portal: 9:16 aspect ratio)
  const ad = await prisma.adBanner.create({
    data: {
      title: "Square Textiles Premium Slub & Melange Yarns",
      clientName: "Square Textiles Ltd.",
      placement: "HERO_RIGHT",
      aspectRatio: "9:16",
      imageUrl: "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789364762/h3gi6eiynajetiryaykl.webp",
      targetUrl: "https://squaretextiles.com",
      startDate: new Date("2026-09-12T00:00:00.000Z"),
      endDate: new Date("2026-12-31T00:00:00.000Z"),
      durationDays: 110,
      totalAmount: 150000.0,
      paymentStatus: "PAID",
      approvalStatus: "APPROVED",
      isActive: true,
      impressionsCount: 150420,
      clicksCount: 3820,
      uploadedById: clientUser.id,
    },
  });
  console.log("✅ Ad banner created: " + ad.title);

  // 10. Create Marketplace Price Indices
  await prisma.marketplacePrice.createMany({
    data: [
      {
        category: "YARN",
        commodityName: "30s Carded Cotton Yarn (Ring Spun)",
        specifications: "100% Cotton, Export Quality, Warp Direction",
        unit: "kg",
        currentPrice: 3.45,
        currency: "USD",
        priceChange: 1.2,
        priceTrend: "UP",
        originMarket: "Local Bangladesh Mills",
        reportedBy: "Square Textiles Ltd.",
      },
      {
        category: "DYES_CHEMICALS",
        commodityName: "Caustic Soda Flakes 99%",
        specifications: "Technical Grade, Textile Pre-treatment & Mercerization",
        unit: "ton",
        currentPrice: 580.0,
        currency: "USD",
        priceChange: -0.8,
        priceTrend: "DOWN",
        originMarket: "China CIF Chattogram",
        reportedBy: "EMMTEX SOLUTIONS BD LTD.",
      },
    ],
  });
  console.log("✅ Marketplace price benchmarks created");

  // 11. Create Official Notice & Research Publication
  await prisma.notice.create({
    data: {
      noticeNo: "ITET/NOT/2026/04",
      title: "15th Council Executive Committee Official Gazette & Portfolio Allocation",
      category: "Executive Council",
      content:
        "The newly elected 15th Central Executive Council of ITET hereby publishes the portfolio allocation and committee secretary appointments for 2026-2028 tenure.",
      publishDate: new Date("2026-08-18T10:00:00.000Z"),
      isUrgent: true,
      isPublished: true,
      authorId: adminUser.id,
    },
  });

  await prisma.publication.create({
    data: {
      title: "Optimization of Cellulase Bio-polishing and Eco-Finishing for Lyocell Fabric",
      journalName: "Journal of Textile Engineering (JTE)",
      volumeIssue: "Vol. 18, Issue 2",
      category: "Technical Textiles",
      authors: "Dr. Engr. Tanvir Ahmed, Prof. Dr. M. A. Kashem",
      abstract:
        "This research investigates enzymatic surface modification of high-modulus lyocell twill fabrics under varying liquor-to-goods ratios.",
      keywords: "Lyocell; Bio-polishing; Cellulase; Fibrillation index",
      publishYear: 2026,
      isPublished: true,
      authorId: adminUser.id,
    },
  });
  console.log("✅ Official Notice & Publication seeded");

  console.log("🎉 Seeding complete successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed with error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
