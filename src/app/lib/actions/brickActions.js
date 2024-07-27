"use server";

export const addBrick = async (token, formData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", "token=" + token);

  const formdata = new FormData();
  formdata.append("image", formData.get("image"));

  console.log("TOPICs", formData.get("disciplines"));

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };
  let addBrickResponse;
  await fetch(`${process.env.BASE_URL}/admin/bricks`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      addBrickResponse = result;
    })
    .catch((error) => console.error(error));
  return addBrickResponse;
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

export const updateBrick = async (token, brickId, formData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", "token=" + token);

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}`,
      requestOptions,
    );
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error(error);
  }
};
