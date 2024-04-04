import { authMiddleware } from "@clerk/nextjs";
// const protectedRoutes = [
//   "/",
//   "/upcoming",
//   "/previous",
//   "/recordings",
//   "/personal-room",
//   "/meeting(.*)",
// ];
export default authMiddleware({
  ignoredRoutes: ["/icons/(.*)", "/images/(.*)","/favicon.ico"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
