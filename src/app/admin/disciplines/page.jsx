import Discipline from "./_components/Discipline";
import { fetchDisciplinesAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export default async function DisciplinePage() {
  const session = await auth();
  const disciplines = await fetchDisciplinesAdmin(session.user.accessToken);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/admin/disciplines");
  };
  return (
    <Discipline
      disciplines={disciplines}
      token={session.user.accessToken}
      revalidateData={revalidateData}
    />
  );
}
