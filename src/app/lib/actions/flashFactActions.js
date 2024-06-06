"use server";

export const addFlashFact = async (token, question, answer, disciplineId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      question: question,
      answer: answer,
      discipline: disciplineId,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let flashFactResponse;
    const flashFactRes = await fetch(
      `${process.env.BASE_URL}/admin/flashcards`,
      requestOptions,
    );
    flashFactResponse = await flashFactRes.json();
    return flashFactResponse;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFlashFact = async (token, flashFactId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    let flashFactResponse;
    const flashFactRes = await fetch(
      `${process.env.BASE_URL}/admin/flashcards/${flashFactId}`,
      requestOptions,
    );
    flashFactResponse = await flashFactRes.json();
    return flashFactResponse;
  } catch (error) {
    console.log(error);
  }
};

export const editFlashFact = async (
  token,
  question,
  answer,
  disciplineId,
  flashFactId,
) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      question: question,
      answer: answer,
      discipline: disciplineId,
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let flashFactResponse;
    const flashFactRes = await fetch(
      `${process.env.BASE_URL}/admin/flashcards/${flashFactId}`,
      requestOptions,
    );
    flashFactResponse = await flashFactRes.json();
    return flashFactResponse;
  } catch (error) {
    console.log(error);
  }
};
