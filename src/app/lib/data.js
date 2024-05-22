import { unstable_noStore as noStore } from "next/cache";

export async function fetchQuizBanksAdmin() {
  noStore();
  const quizzes = await fetch(`${process.env.BASE_URL}/admin/quizzes`);
  console.log("QUIZZES:", quizzes);
}
