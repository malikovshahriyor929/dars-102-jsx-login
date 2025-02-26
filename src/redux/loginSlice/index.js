import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  userData: JSON.parse(localStorage.getItem("data")) || [],
};

const baseUrl = "https://679b903633d316846324525e.mockapi.io";
let loginChecker = false;
let LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.userData = payload;
      localStorage.setItem("data", JSON.stringify(payload));
    },
    registerFunction: (state, { payload }) => {
      if (payload.password === payload.confirm) {
        axios.post(`${baseUrl}/lavashxona`, payload).then((res) => {
          state.userData = [...state.userData, res.data];
          localStorage.setItem("data", JSON.stringify(state.userData));
        });
      }
    },
    forgot: (state, { payload }) => {
    state.userData = state.userData.map((value) =>
        value.email === payload.email
          ? ({ ...value, password: payload.password },console.log(payload)
          )
          : value
      );
      localStorage.setItem("data",JSON.stringify(state.userData))
    },
    // login: (state, { payload }) => {
    //   state.userData.filter((value) =>
    //     value.email === payload.email && value.password === payload.password
    //       ? // <Navigate to={"/"} />
    //         (loginChecker = true)
    //       : toast.error("sizning password toki emailingiz xato")
    //   );
    // },
  },
});

export { loginChecker };

export const { setUsers, registerFunction, login, forgot } = LoginSlice.actions;
export default LoginSlice.reducer;
