import { unstable_noStore as noStore } from "next/cache";

export async function fetchQuizBanksAdmin(token) {
  noStore();
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "token=" + token);
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const quizzes = await fetch(`${process.env.BASE_URL}/admin/quizzes`, requestOptions);
  console.log("QUIZZES:", quizzes);
  return quizzes.json();
}

export async function getUserData(token) {
  noStore();
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "token=" + token);
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const user = await fetch(`${process.env.BASE_URL}/auth/get-user`, requestOptions);
  return user.json();
}
