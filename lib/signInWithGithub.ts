"use server"

import { signIn } from "@/auth"


export const signInGithHub = async()=>{
    await signIn("github")
}