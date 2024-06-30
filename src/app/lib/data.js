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

export async function fetchCategoriesAdmin(token) {
  noStore();
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append(
    "Cookie",
    "connect.sid=s%3AIaARxVJhjNWcWW3hkw6y-nQ7CySlJpQT.gG7eMs4VEXc81y1xDycbinF%2BmbIl6iXGDotb1OXQNWU",
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let categories;
  await fetch(`${process.env.BASE_URL}/admin/category`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      categories = result;
    })
    .catch((error) => console.error(error));
  return JSON.parse(categories);
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
export async function fetchNotesUser(token) {
  noStore();

  const userId = "6619458215d9192842928459"; // Replace with actual user ID

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "token=" + token);

  const requestOptions = {
    method: "GET", // Use POST instead of GET
    headers: headers,
    body: JSON.stringify({ userId }), // JSON body with userId
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/user/notes`,
      requestOptions,
    );

    if (!response.ok) {
      console.log(response.status);
    }

    const notes = await response.json();
    console.log(notes); // Logging the JSON response

    return notes;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error; // Propagate the error up to the caller
  }
}
