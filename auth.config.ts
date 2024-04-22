import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { getUserByEmail } from "./lib/dbHelper";
import { loginSchema } from "./lib/types";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validateFields = await loginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }
          const pwHash = bcryptjs.compareSync(password,user.password);
          console.log(user);
          if(pwHash) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
