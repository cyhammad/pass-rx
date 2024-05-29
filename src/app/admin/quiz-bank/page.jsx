import { fetchQuizBanksAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import QuizBanks from "./_components/QuizBanks";

export default async function QuizBankPage() {
  const session = await auth();
  const quizzes = await fetchQuizBanksAdmin(session.user.accessToken);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/admin/quiz-bank");
  };
  return (
    <QuizBanks
      quizzes={quizzes}
      token={session.user.accessToken}
      revalidateData={revalidateData}
    />
  );
}
