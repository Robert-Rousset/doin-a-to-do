import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        description: action.payload.description,
        completed: true,
      };
      state.todos.push(newTodo);
    },
    signIn: (state, action) => {
      const signedIn = {
        ...state,
        name: action.payload.name,
        signedIn: true,
      };
      return signedIn;
    },
    changeTheme: (state, action) => {
      const changeTheme = {
        ...state,
        theme: action.payload.theme,
      };
      return changeTheme;
    },
  },
});

export const { addTodo, signIn, changeTheme } = userSlice.actions;
export default userSlice.reducer;
