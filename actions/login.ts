"use server";

import { z } from "zod";
import { signIn } from "@/auth";
import { loginSchema } from "@/lib/types";
import { AuthError } from "next-auth";
import { REDIRECT_ROUTE } from "@/lib/Route";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  const validateSchemas = loginSchema.safeParse(values);

  if (!validateSchemas.success) {
    return { error: "Invalid Credentials" };
  }
  try {
    await signIn("credentials", values, REDIRECT_ROUTE);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }
    throw error;
  }

  return { success: "Email sent!" };
};
