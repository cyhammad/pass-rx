import { permanentRedirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Rootpage() {
  const session = await auth();
  if (!!session) {
    if (session.user.role === "admin") {
      return permanentRedirect("/admin");
    }
    return permanentRedirect("/user");
  }
  return permanentRedirect("/auth/sign-in");
}