"use server";

import { signOut } from "@/auth";

export const signoutHelper = async () => {
  await signOut();
};
