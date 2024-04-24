import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import authConfig from "./auth.config";
import { getUserById } from "./lib/dbHelper";
import { userType } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      userType: "user"|"seller";
    } & DefaultSession["user"];
  }
}

// TODO
// extend user type and session type for token saved in local storage

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async jwt({ token, user }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.userType = existingUser.userType;
      return token;
    },
    async session({ session, token }) {
      if(token.userType && session.user){
        session.user.userType = token.userType as userType;
      }
      console.log("session:", token);
      return session;
    },
  },
});
