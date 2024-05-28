import { getUser } from "./auth";

export const authConfig = {
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      console.log("HERE USER", auth)
      const isOnAdminDashboard = nextUrl.pathname.startsWith("/admin");
      if (isOnAdminDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/admin", nextUrl));
      }
      return true;
    },
    async session({ session, user, token }) {
      console.log({session, user, token})
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log({token, user, account, profile, isNewUser})
      return token
    }
  },
  providers: [],
};
