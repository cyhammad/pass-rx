import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Rootpage() {
  const session = await auth();
  if (!!session) {
    if (session.user.role === "admin") {
      return redirect("/admin");
    }
    return redirect("/user");
  }
  return redirect("/auth/sign-in");
}