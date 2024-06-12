import { createSlice } from "@reduxjs/toolkit";

const AllUsers = createSlice({
  name: "AllUsers",
  initialState: {
    users: [],
  },
  reducers: {
    allUsersRequest: (state, action) => {
      return {...state, users: action.payload };
    },
    allUsersRequestFailed: (state, action) => {
      state.error = action.payload.message;
    },
    allUsersReset: (state, action) => {
      return { users: [] };
    },
  },
});

export const { allUsersRequest, allUsersRequestFailed, allUsersReset } =
  AllUsers.actions;
export default AllUsers.reducer;