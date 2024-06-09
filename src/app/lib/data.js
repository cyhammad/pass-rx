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
  const quizzes = await fetch(
    `${process.env.BASE_URL}/admin/quizzes`,
    requestOptions,
  );
  return quizzes.json();
}

export async function fetchDisciplinesAdmin(token) {
  noStore();
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "token=" + token);
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const disciplines = await fetch(
    `${process.env.BASE_URL}/admin/disciplines`,
    requestOptions,
  );
  return disciplines.json();
}

export async function fetchFlashFactsAdmin(token) {
  noStore();
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "token=" + token);
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const flashFacts = await fetch(
    `${process.env.BASE_URL}/admin/flashcards`,
    requestOptions,
  );
  return flashFacts.json();
}

export async function fetchBricksAdmin(token) {
  noStore();
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "token=" + token);
  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  const flashFacts = await fetch(
    `${process.env.BASE_URL}/admin/bricks`,
    requestOptions,
  );
  return flashFacts.json();
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
  const user = await fetch(
    `${process.env.BASE_URL}/auth/get-user`,
    requestOptions,
  );
  return user.json();
}
