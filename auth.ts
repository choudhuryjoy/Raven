import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import authConfig from "./auth.config";

declare module "next-auth" {
  interface Session {
    user: {
      userType: "user" | "seller";
    } & DefaultSession["user"];
  }
}

// TODO
// extend user type and session type for token saved in local storage

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
