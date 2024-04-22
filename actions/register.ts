"use server";

import { z } from "zod";
import { registerSchema } from "@/lib/types";
import prisma from "@/db";
import bcryptjs from "bcryptjs";

import { getUserByEmail } from "@/lib/dbHelper";
import { loginAction } from "./login";

export const registerAction = async (
  values: z.infer<typeof registerSchema>
) => {
  const validateSchemas = registerSchema.safeParse(values);
  if (!validateSchemas.success) {
    return { error: "Invalid Credentials" };
  }

  let { name, email, password, userType } = values;

  var salt = bcryptjs.genSaltSync(10);
  var hash = bcryptjs.hashSync(password, salt);

  let isUser = await getUserByEmail(email);

  if (isUser) {
    return { error: "Email already exists" };
  }

  let user = await prisma.user.create({
    data: {
      email,
      name,
      userType,
      password: hash,
    },
  });

  // ADD logic to login
  await loginAction(validateSchemas.data);

  return { success: "Email sent!" };
};
