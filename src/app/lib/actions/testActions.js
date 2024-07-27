"use server";

export async function addTest(token,
    data
  ) {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Cookie", "token=" + token);
      const raw = JSON.stringify({
        difficulty: data.difficulty,
        questionStatus: data.questionStatus,
        answerStatus: data.answerStatus,
        markStatus: data.markStatus,
        disciplines: data.disciplines,
        noOfQuestions: data.noOfQuestions,
        testName: data.testName,
        mode: data.mode,
        
      });  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      let testResponse;
      const deck = await fetch(
        `${process.env.BASE_URL}/user/tests`,
        requestOptions,
      );
      testResponse = await deck.json();
      console.log( testResponse);
      return testResponse
    } catch (error) {
        console.log(error)
      throw error;
    }
  }
  