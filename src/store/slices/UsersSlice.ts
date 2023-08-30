import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAction, IState } from "../../interfaces";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getUsers = createAsyncThunk("getUsers/fetch", async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  data = await data.json();
  return data;
});

export const UsersSlice = createSlice({
  name: "userList",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state: IState) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state: IState, action: IAction) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state: IState) => {
        state.loading = false;
        state.error = "rejected";
      });
  },
});

export default UsersSlice.reducer;
