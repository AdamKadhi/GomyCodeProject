import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import tournoiSlice from "./tournoiSlice/tournoiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tournoi:tournoiSlice
  },
});
