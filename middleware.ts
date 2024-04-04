import { authMiddleware } from "@clerk/nextjs";
const protectedRoutes = [
  // "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting(.*)",
];
export default authMiddleware({
  publicRoutes(req) {
    return !protectedRoutes.some((route) =>
      new RegExp(route).test(req.nextUrl.pathname)
    );
  },
  ignoredRoutes:['/icons/(.*)','/images/(.*)']
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
