"use server";

export const addTopic = async (
  token,
  title,
  content,
  brickId,
  sectionId,
  chapterId,
  contentJSON,
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", `token=${token}`);

  const raw = JSON.stringify({
    title: title,
    content: content,
    contentJson: contentJSON,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}/sections/${sectionId}/chapters/${chapterId}/topics`,
      requestOptions,
    );
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getTopic = async (
  token,
  brickId,
  sectionId,
  chapterId,
  topicId,
) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", `token=${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}/sections/${sectionId}/chapters/${chapterId}/topics/${topicId}`,
      requestOptions,
    );
    const result = await response.text();
    const resultObj = JSON.parse(result);
    return resultObj;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTopic = async (
  token,
  brickId,
  sectionId,
  chapterId,
  topicId,
) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", `token=${token}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/admin/bricks/${brickId}/sections/${sectionId}/chapters/${chapterId}/topics/${topicId}`,
      requestOptions,
    );
    const result = await response.text();
    const resultObj = JSON.parse(result);
    return resultObj;
  } catch (error) {
    console.error(error);
  }
};
