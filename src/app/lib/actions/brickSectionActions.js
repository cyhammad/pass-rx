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

export const deleteSection = async (token, brickId, sectionId) => {
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
    let deleteSectionResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}/sections/${sectionId}`,
      requestOptions,
    );
    deleteSectionResponse = await quizBank.json();
    return deleteSectionResponse;
  } catch (error) {
    throw error;
  }
};
