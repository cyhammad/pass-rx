import { fetchQuizBanksAdmin } from "@/app/lib/data";
import { auth } from "@/auth";

import QuizBanks from "./_components/QuizBanks";

export default async function QuizBankPage() {
  const session = await auth();
  const token = session.user.accessToken;
  const quizzes = await fetchQuizBanksAdmin(token);

  return <QuizBanks quizzes={quizzes} token={token} />;
}
