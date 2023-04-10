import { createSlice } from "@reduxjs/toolkit";

//Function to fetch user's cards from local storage
const getDatafromLocalstorage = () => {
  const userCards = localStorage.getItem("userFlashCards");
  if (userCards) {
    return JSON.parse(userCards);
  } else {
    return [];
  }
};

const initialState = {
  //Fetching User's Card Data from local storage to set it as initial state
  userCards: getDatafromLocalstorage(),
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setUserCards: (state, action) => {
      state.userCards = action.payload;
    },
  },
});

//Helper function for retrieving user cards data from the store
export const selectUserCards = (state) => state.app.userCards; 

 //Reducer function to update user cards data
 export const { setUserCards } = appSlice.actions;

export default appSlice.reducer;
