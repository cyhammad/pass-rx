"use server";

export const addCategory = async (token, categoryName) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", "token=" + token);

  const raw = JSON.stringify({
    name: categoryName,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  let res;

  await fetch(`${process.env.BASE_URL}/admin/category`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.error(error));
  return res;
};
