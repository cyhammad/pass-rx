import QuizBank from "./components/QuizBank";
import { fetchDisciplinesAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export default async function page() {
  const session = await auth();
  console.log(session.user);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/user/flash-facts");
  };
  const disciplines = await fetchDisciplinesAdmin(session.user.accessToken);

  return (
    <QuizBank
      disciplines={disciplines}
      token={session.user.accessToken}
      revalidateData={revalidateData}
    />
  );
}
