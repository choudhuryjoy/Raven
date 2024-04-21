"use server";

import { z } from "zod";
import { registerSchema } from "@/lib/types";

export const registerAction = async (values: z.infer<typeof registerSchema>) => {
  const validateSchemas = registerSchema.safeParse(values);

  if (!validateSchemas.success) {
    return { error: "Invalid Credentials" };
  } else {  
    return { success: "Email sent!" };
  }
};
