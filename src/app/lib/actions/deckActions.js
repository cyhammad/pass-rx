"use server";

export async function addDeck(token,
    data
  ) {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Cookie", "token=" + token);
      const raw = JSON.stringify({
        deckName:data.deckName,
        cardStatus:data.status,
        cardRatings:data.rating , 
        markStatus:data.markStatus, 
        noOfQuestions:data.noOfQuestions,
        disciplineIds: data.disciplines
      });  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      let deckResponse;
      const deck = await fetch(
        `${process.env.BASE_URL}/user/decks`,
        requestOptions,
      );
      deckResponse = await deck.json();
      return deckResponse
    } catch (error) {
        console.log(error)
      throw error;
    }
  }
  