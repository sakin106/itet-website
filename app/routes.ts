import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // About ITET
  route("history-itet", "routes/about/history.tsx"),
  route("mission-vision", "routes/about/mission.tsx"),
  route("constitution", "routes/about/constitution.tsx"),
  route("committee", "routes/about/committee.tsx"),
  route("former-leaders", "routes/leadership/former-leaders.tsx"),
  route("stockholders", "routes/stockholders/index.tsx"),
  route("welfareTrust", "routes/about/welfare.tsx"),
  route("welfare-trust", "routes/about/welfare-alias.tsx"),

  // Membership
  route("membership-overview", "routes/membership/overview.tsx"),
  route("members-benifits", "routes/membership/benefits.tsx"),
  route("membership-login", "routes/membership/login.tsx"),

  // Activities, Media & Resources
  route("events", "routes/events/index.tsx"),
  route("notices", "routes/notices/index.tsx"),
  route("publication", "routes/publication/index.tsx"),
  route("job-circular", "routes/jobs/index.tsx"),
  route("gallery", "routes/gallery/index.tsx"),

  // Portals & Contact
  route("member-portal", "routes/portals/member.tsx"),
  route("client-portal", "routes/portals/client.tsx"),
  route("advertiser-portal", "routes/portals/client-alias.tsx"),
  route("contact", "routes/contact/index.tsx"),

  // Internal Authenticated Dashboards (Phase 2)
  route("member-dashboard", "routes/dashboard/member.tsx"),
  route("member-dashboard/forum", "routes/dashboard/forum.tsx"),
  route("admin-dashboard", "routes/dashboard/admin.tsx"),

  // Fallback
  route("*", "routes/placeholder.tsx"),
] satisfies RouteConfig;
