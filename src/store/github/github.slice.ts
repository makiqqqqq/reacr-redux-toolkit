import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  favourites: JSON.parse(localStorage.getItem("rfk") ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem("rfk", JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((item: string) => item !== action.payload);
      localStorage.setItem("rfk", JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
