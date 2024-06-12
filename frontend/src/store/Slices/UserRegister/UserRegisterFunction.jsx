import { RegisterUser } from "../../../network/endpoints/User";
import axios from 'axios';
import {
  userRegisterSuccess,
  userRegisterRequest,
  userRegisterFail,
} from "./UserRegister";


export const UserRegister = async (dispatch, name, email, password, isProfessional) => {
  const isProfInt = isProfessional ? 1 : 0;
  try {
    dispatch(userRegisterRequest());
    const { data } = await RegisterUser(name, email, password, isProfessional); // Очікування результату асинхронного запиту
    dispatch(userRegisterSuccess(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(userRegisterFail(error.response.data.detail));
  }
};
