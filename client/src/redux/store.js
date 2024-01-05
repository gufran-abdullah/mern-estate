import { configureStore } from "@reduxjs/toolkit";
import useerReducer from "./user/userSlice";

export const store = configureStore({
  reducer: { user: useerReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
