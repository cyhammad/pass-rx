"use server";

export const addBrick = async (token, formData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append(
    "Cookie",
    "connect.sid=s%3AzHMrS-iq8-XTFtYkoWMd8uuFyb1c8ybZ.WByQs1TAFOKCCacSyi%2BdJOm8eJ1S8HJqZ6fgUnOiY6U; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDk5ZmI1MWU0MGQ1ZDMxYjlmZDAzOSIsImlhdCI6MTcyMDQyMTQ1OCwiZXhwIjoxNzIzMDEzNDU4fQ.JykuM8eW5TPW_ckZG6HZlk6kqxZwHdZHY_HI_jkWWBU",
  );

  const formdata = new FormData();
  formdata.append("image", formData.get("image"));

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
      console.log(result);
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
