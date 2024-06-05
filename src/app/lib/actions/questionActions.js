"use server";

export const addQuestion = async (
  token,
  question,
  answers,
  correctAnswerIndex,
  difficulty,
  explanation,
  disciplineId,
  quizbankId,
  addToFlashFacts,
) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      question,
      answers,
      correctAnswerIndex,
      difficulty,
      explanation,
      disciplineId,
      quizbankId,
      addToFlashFacts,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let questionResponse;
    const questionRes = await fetch(
      `${process.env.BASE_URL}/admin/questions`,
      requestOptions,
    );
    questionResponse = await questionRes.json();
    return questionResponse;
  } catch (error) {
    throw error;
  }
};
