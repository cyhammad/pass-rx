import { fetchDisciplinesAdmin } from "@/app/lib/data";
import { auth } from "@/auth";

import Disciplines from "./_components/Disciplines";

export default async function DisciplinePage() {
  const session = await auth();
  const disciplines = await fetchDisciplinesAdmin(session.user.accessToken);
  return (
    <Disciplines
      disciplines={disciplines}
      token={session.user.accessToken}
    />
  );
}
