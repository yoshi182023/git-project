import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: { user: {} },
  reducers: {
    setUser: (state) => {
      state.user = { login: "abc" };
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setCounter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser, decrement, setCounter } = userSlice.actions;
export default userSlice.reducer;
