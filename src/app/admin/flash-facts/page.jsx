import FlashFacts from "@/app/admin/flash-facts/_components/FlashFacts";
import { fetchDisciplinesAdmin, fetchFlashFactsAdmin } from "@/app/lib/data";
import { auth } from "@/auth";


export default async function FlashFactsPage() {
  const session = await auth();
  const token = session.user.accessToken;
  const flashFacts = await fetchFlashFactsAdmin(token);
  const disciplines = await fetchDisciplinesAdmin(token);

  return (
    <FlashFacts
      flashFacts={flashFacts}
      disciplines={disciplines}
      token={token}
    />
  );
}
