import { fetchCategoriesAdmin, fetchDisciplinesAdmin } from "@/app/lib/data";
import { auth } from "@/auth";

import Disciplines from "./_components/Disciplines";

export default async function DisciplinePage() {
  const session = await auth();
  const token = session.user.accessToken;
  const disciplines = await fetchDisciplinesAdmin(token);
  const categories = await fetchCategoriesAdmin(token);
  return (
    <Disciplines
      disciplines={disciplines}
      categories={categories}
      token={token}
    />
  );
}
