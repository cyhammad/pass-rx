import { fetchBricksAdmin } from "@/app/lib/data";
import Bricks from "./_components/Bricks";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export default async function BricksPage() {
  const session = await auth();
  const token = session.user.accessToken;
  const bricks = await fetchBricksAdmin(token);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/admin/bricks");
  };
  return <Bricks data={bricks} token={token} revalidateData={revalidateData} />;
}
