import FlashFacts from "@/app/admin/flash-facts/_components/FlashFacts";
import React from "react";
import QuizBank from "./_components/QuizBank";
import { fetchQuizBanksAdmin } from "@/app/lib/data";
import { auth } from "@/auth";

export default async function QuizBankPage() {
  const session = await auth();
  console.log("SESSION", session);
  const quizzes = await fetchQuizBanksAdmin(session.user.accessToken);
  console.log("quizzes", quizzes);

  return <QuizBank quizzes={quizzes} />;
}
