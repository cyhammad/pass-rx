import { getUserData } from "./app/lib/data";

export const authConfig = {
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard =
        nextUrl.pathname.startsWith("/admin") ||
        nextUrl.pathname.startsWith("/user");
      const isOnUser = nextUrl.pathname.startsWith("/user");
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      if (isOnDashboard) {
        if (isLoggedIn) {
          if (auth.user.role === "admin" && isOnAdmin) {
            // ADMIN AND ON ADMIN
            return true;
          }
          if (auth.user.role === "user" && isOnUser) {
            // USER AND ON USER
            return true;
          }
          if (auth.user.role === "admin") {
            // ADMIN AND NOT ON ADMIN
            return Response.redirect(new URL("/admin", nextUrl));
          }
          if (auth.user.role === "user") {
            // USER AND NOT ON USER
            return Response.redirect(new URL("/user", nextUrl));
          }
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (auth.user.role === "admin") {
          return Response.redirect(new URL("/admin", nextUrl));
        }
        if (auth.user.role === "user") {
          return Response.redirect(new URL("/user", nextUrl));
        }
      }
      return true;
    },
    async session({ session, token }) {
      session.user = { ...session.user, ...token };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const userData = await getUserData(user.token);
        token = { ...token, ...userData.user, accessToken: user.token };
        user = { ...user, ...userData.user };
      }
      return token;
    },
  },
  providers: [],
};
