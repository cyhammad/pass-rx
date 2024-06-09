import { fetchQuizBanksAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import QuizBanks from "./_components/QuizBanks";

export default async function QuizBankPage() {
  const session = await auth();
  const token = session.user.accessToken;
  const quizzes = await fetchQuizBanksAdmin(token);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/admin/quiz-bank");
  };
  return (
    <QuizBanks
      quizzes={quizzes}
      token={token}
      revalidateData={revalidateData}
    />
  );
}
