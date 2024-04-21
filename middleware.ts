  import { NextResponse } from "next/server";
  import authConfig from "./auth.config";
  import NextAuth from "next-auth";
  import { authRoute, REDIRECT_ROUTE, API_PREFIX_ROUTES } from "./lib/Route";

  export const { auth } = NextAuth(authConfig);

  export default auth((req) => {
    let isLoggedIn = req.auth;

    let isApiRoute = req.nextUrl.pathname.startsWith(API_PREFIX_ROUTES);
    let isProtectedRoute = req.nextUrl.pathname.startsWith(REDIRECT_ROUTE);
    let isAuthRoute = authRoute.includes(req.nextUrl.pathname);

    if (isApiRoute) {
      return;
    }
    if (isAuthRoute) {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL(REDIRECT_ROUTE, req.url));
      }
      return;
    }
    if (isProtectedRoute && !isLoggedIn) {
      console.log("sorry babu");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  });

  // Optionally, don't invoke Middleware on some paths
  export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };
