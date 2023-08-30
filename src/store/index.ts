import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slices/TodoSlice";
import UserReducer from "./slices/UsersSlice";
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    users: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
