import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./todoSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
