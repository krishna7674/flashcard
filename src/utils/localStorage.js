//function for getting user's cards from the local storage (if exists)
export const getMyflashCards = () => {
  if (!localStorage["userFlashCards"]) {
    localStorage["userFlashCards"] = "[]";
  }

  let myFlashCards = localStorage["userFlashCards"];
  myFlashCards = JSON.parse(myFlashCards);
  return myFlashCards;
};

//Function to deleted Card from local storage
export const deleteFlashCardById = (cardId) => {
  const userCards = getMyflashCards();
  const filterCards = userCards.filter((card) => {
    return card.id !== cardId;
  });
  localStorage.setItem("userFlashCards", JSON.stringify(filterCards));
  //Reloading page after deleting card so that redux store should have updated data
  window.location.reload();
};
