"use server";

import { z } from "zod";
import { loginSchema } from "@/lib/types";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  const validateSchemas = loginSchema.safeParse(values);

  if (!validateSchemas.success) {
    return { error: "Invalid Credentials" };
  } else {  
    return { success: "Email sent!" };
  }
};
