"use server";

export const addChapter = async (token, brickId, sectionId, title) => {
  console.log("SECTIONID", sectionId);
  console.log("BRICKID", brickId);
  console.log("TITLE", title);
  
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
    let addChapterResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}/sections/${sectionId}/chapters`,
      requestOptions,
    );
    addChapterResponse = await quizBank.json();
    return addChapterResponse;
  } catch (error) {
    throw error;
  }
};
