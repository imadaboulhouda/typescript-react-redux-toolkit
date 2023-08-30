import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: 1, name: "hello" }],
};
export const TodoSlice = createSlice({
  name: "todos",
  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        { id: new Date().getTime(), name: action.payload },
      ];
    },
  },
  initialState,
});

export default TodoSlice.reducer;

export const { addTodo } = TodoSlice.actions;
