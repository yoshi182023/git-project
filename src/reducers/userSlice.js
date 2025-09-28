import { createSlice } from "@reduxjs/toolkit";
//定义状态值 初始值 修改调用函数
const userSlice = createSlice({
  name: "User",
  initialState: { user: {} },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
