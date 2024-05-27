import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { cookies } from "next/headers";

async function getUser(email, password) {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password,
    });
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };
    const user = await fetch(
      `${process.env.BASE_URL}/auth/login`,
      requestOptions,
    );
    return user.json();
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const userDB = await getUser(email, password);
          const user = {
            email: email,
            role: userDB.role,
            token: userDB.token,
          };
          return user;
        }
        return null;
      },
    }),
  ],
});
