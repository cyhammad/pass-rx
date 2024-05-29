"use server";

export const addDiscipline = async (token, disciplineName) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", "token=" + token);

  const raw = JSON.stringify({
    name: disciplineName,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  let res;

  await fetch(`${process.env.BASE_URL}/admin/disciplines`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.error(error));
  return res;
};

export const updateDiscipline = async (token, disciplineName, disciplineId) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", "token=" + token);

  const raw = JSON.stringify({
    name: disciplineName,
  });

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  let res;

  await fetch(
    `${process.env.BASE_URL}/admin/disciplines/${disciplineId}`,
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.error(error));
  return res;
};

export const deleteDiscipline = async (token, disciplineId) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", "token=" + token);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };
  let res;

  await fetch(
    `${process.env.BASE_URL}/admin/disciplines/${disciplineId}`,
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => {
      res = result;
    })
    .catch((error) => console.error(error));
  return res;
};
