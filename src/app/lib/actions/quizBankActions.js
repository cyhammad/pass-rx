"use server";

export async function addQuizBank(
  token,
  title,
  description,
  disciplineIds,
  isLock,
) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      title: title,
      description: description,
      disciplineIds: disciplineIds,
      isLock: isLock,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let quizBankResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/quizzes`,
      requestOptions,
    );
    quizBankResponse = await quizBank.json();
    return quizBankResponse;
  } catch (error) {
    throw error;
  }
}

export const updateQuizBank = async (
  token,
  quizId,
  title,
  description,
  disciplineIds,
  isLock,
) => {
  // Update quiz bank
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      title: title,
      description: description,
      disciplineIds: disciplineIds,
      isLock: isLock,
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let quizBankResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/quizzes/${quizId}`,
      requestOptions,
    );
    quizBankResponse = await quizBank.json();
    return quizBankResponse;
  } catch (error) {
    throw error;
  }
};

export const deleteQuizBank = async (token, quizId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    let quizBankResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/quizzes/${quizId}`,
      requestOptions,
    );
    quizBankResponse = await quizBank.json();
    return quizBankResponse;
  } catch (error) {
    throw error;
  }
};

export const getQuizBank = async (token, quizId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let quizBankResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/quizzes/${quizId}`,
      requestOptions,
    );
    quizBankResponse = await quizBank.json();
    return quizBankResponse;
  } catch (error) {
    throw error;
  }
};

export const getQuestionsByQuizId = async (token, quizId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let quizBankResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/questions?quizbankId=${quizId}`,
      requestOptions,
    );
    quizBankResponse = await quizBank.json();
    return quizBankResponse;
  } catch (error) {
    throw error;
  }
};
