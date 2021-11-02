import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        description: action.payload.description,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
