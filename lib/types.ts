import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be greater than 3 chars" }),
  userType: z.enum(["user", "seller"], {
    required_error: "Please select a user type.",
    invalid_type_error: "Please select a valid user type.",
  }),
});


export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be greater than 3 chars" }),
});
