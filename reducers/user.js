import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = null
    },
    refreshData: (state, action) => {
      state.value.referralClicks = action.payload.referralClicks
      state.value.referredUsersInfos = action.payload.referredUsers
      console.log("fait")
    }
  },
});

export const { login, logout, refreshData } = userSlice.actions;
export default userSlice.reducer;
