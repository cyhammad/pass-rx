import { fetchDisciplinesAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import FlashFacts from "./components/FlashFacts";


export default async function FlashFactsPage() {
  const session = await auth();
  console.log(session.user);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/user/flash-facts");
  }
  const disciplines = await fetchDisciplinesAdmin(session.user.accessToken);

  return (
    <FlashFacts
      disciplines={disciplines}
      token={session.user.accessToken}
      
    />
  );
}
