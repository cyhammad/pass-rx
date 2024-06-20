import { fetchBricksAdmin } from "@/app/lib/data";
import Bricks from "./_components/Bricks";
import { auth } from "@/auth";

export default async function BricksPage() {
  const session = await auth();
  const token = session.user.accessToken;
  const bricks = await fetchBricksAdmin(token);

  return <Bricks data={bricks} token={token} />;
}
