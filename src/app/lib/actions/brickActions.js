"use server";

export const addBrick = async (
  token,
  title,
  quote,
  learningOutcomes,
  image,
  topicsCovered,
) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      title: title,
      quote: quote,
      learningOutcomes: learningOutcomes,
      image: image,
      disciplines: topicsCovered,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let addBrickResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks`,
      requestOptions,
    );
    addBrickResponse = await quizBank.json();
    return addBrickResponse;
  } catch (error) {
    throw error;
  }
};

export const deleteBrick = async (token, brickId) => {
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
    let deleteBrickResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}`,
      requestOptions,
    );
    deleteBrickResponse = await quizBank.json();
    return deleteBrickResponse;
  } catch (error) {
    throw error;
  }
};

export const getBrick = async (token, brickId) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let getBrickResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}`,
      requestOptions,
    );
    getBrickResponse = await quizBank.json();
    return getBrickResponse;
  } catch (error) {
    throw error;
  }
};

export const updateBrick = async (
  token,
  brickId,
  title,
  quote,
  learningOutcomes,
  image,
  disciplines,
) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "token=" + token);
    const raw = JSON.stringify({
      title: title,
      quote: quote,
      learningOutcomes: learningOutcomes,
      image: image,
      disciplines: disciplines,
    });
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let updateBrickResponse;
    const quizBank = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}`,
      requestOptions,
    );
    updateBrickResponse = await quizBank.json();
    return updateBrickResponse;
  } catch (error) {
    throw error;
  }
};
