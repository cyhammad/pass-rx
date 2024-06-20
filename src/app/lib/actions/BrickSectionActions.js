"use server";

export const addSection = async (token, brickId, title) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      title: title,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let addSectionResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}/sections`,
      requestOptions,
    );
    addSectionResponse = await quizBank.json();
    return addSectionResponse;
  } catch (error) {
    throw error;
  }
};
