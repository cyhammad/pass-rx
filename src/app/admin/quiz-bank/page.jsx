import FlashFacts from "@/app/admin/flash-facts/_components/FlashFacts";

import QuizBank from "./_components/QuizBank";
import { fetchQuizBanksAdmin } from "@/app/lib/data";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export default async function QuizBankPage() {
  const session = await auth();
  const quizzes = await fetchQuizBanksAdmin(session.user.accessToken);
  const revalidateData = async () => {
    "use server";
    revalidatePath("/admin/quiz-bank");
  };
  return (
    <QuizBank
      quizzes={quizzes}
      token={session.user.accessToken}
      revalidateData={revalidateData}
    />
  );
}
