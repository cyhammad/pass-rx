import FlashFacts from "@/app/admin/flash-facts/_components/FlashFacts";

import QuizBank from "./_components/QuizBank";
import { fetchQuizBanksAdmin } from "@/app/lib/data";
import { auth } from "@/auth";

export default async function QuizBankPage() {
  const session = await auth();
  const quizzes = await fetchQuizBanksAdmin(session.user.accessToken);

  return <QuizBank quizzes={quizzes} />;
}
