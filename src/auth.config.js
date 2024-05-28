import { cookies } from "next/headers";
import { getUserData } from "./app/lib/data";

export const authConfig = {
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/admin") || nextUrl.pathname.startsWith("/user");
      if (isOnDashboard) {
        if (isLoggedIn) {
          if (auth.user.role === "admin") {
            return true;
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (auth.user.role === "admin") {
          return Response.redirect(new URL("/admin", nextUrl));
        }
        else {
          return Response.redirect(new URL("/user", nextUrl));
        }
      }
      return true;
    },
    async session({ session, token }) {
      // console.log("SESSION CALLBACK");
      session.user = { ...session.user, ...token };
      return session;
    },
    async jwt({ token, user }) {
      // console.log("JWT CALLBACK");
      // console.log("TOKEN", token);
      // console.log("USER", user);
      if (user) {
        const userData = await getUserData(user.token);
        token = { ...token, ...userData.user, accessToken: user.token};
        user = { ...user, ...userData.user };
      }
      return token;
    },
  },
  providers: [],
};
