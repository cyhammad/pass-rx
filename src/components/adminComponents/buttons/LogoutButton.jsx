"use server";
import { signOut } from "@/auth";
import { cookies } from "next/headers";

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        cookies().delete("token");
        await signOut();
      }}
    >
      <button className="button w-full px-5 pb-1.5 pt-2.5 text-start text-sm">
        Log out
      </button>
    </form>
  );
};

export default LogoutButton;
