import { createSlice } from "@reduxjs/toolkit";

const loadUserItem = () => {
  const data = localStorage.getItem("user");
  const userItemFromStorage = data ? JSON.parse(data) : null;
  return userItemFromStorage;
};

const userSlice = createSlice({
  name: "User",
  initialState: {
    userInfo: loadUserItem(),
  },
  reducers: {
    userLoginRequest: (state, action) => {
      return {};
    },
    userLoginSuccess: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { userInfo: action.payload };
    },
    userLogout: (state, action) => {
      localStorage.removeItem("user");
      return {};
    },
    userLoginFail: (state, action) => {
      return { error: action.payload.message }; // Збереження тільки повідомлення про помилку
    },
    userListRequestFailed: (state, action) => {
      return { ...state, error: action.payload.message }; // Збереження тільки повідомлення про помилку
    },
    
  },
});

export const { userLoginRequest, userLoginSuccess, userLoginFail, userLogout } =
  userSlice.actions;
export default userSlice.reducer;
