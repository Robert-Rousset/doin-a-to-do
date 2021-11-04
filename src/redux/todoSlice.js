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
        completed: false,
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
    changeName: (state, action) => {
      const changeName = {
        ...state,
        name: action.payload.name,
      };
      return changeName;
    },
    completeTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
  },
});

export const {
  addTodo,
  signIn,
  changeTheme,
  changeName,
  completeTodo,
  deleteTodo,
} = userSlice.actions;
export default userSlice.reducer;
