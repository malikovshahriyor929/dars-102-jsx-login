import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { loginChecker } from "../../redux/loginSlice";

import { Button, Checkbox, TextField } from "@mui/material";
import {
  Apple,
  Facebook,
  FacebookSharp,
  Flag,
  Google,
} from "@mui/icons-material";

const baseUrl = "https://679b903633d316846324525e.mockapi.io";

const Login = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.LoginSlice);
  let [checker, setChecker] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`${baseUrl}/lavashxona`).then((res) => {
      // dispatch(setUsers(res.data));
    });
  }, [dispatch]);

  let { register, reset, handleSubmit } = useForm();
  let loginFunc = (data) => {
    axios.get(`${baseUrl}/lavashxona`).then((res) => {
      // dispatch(setUsers(res.data));
      res.data.filter((value) =>
        value.email === data.email && value.password === data.password
          ? (setChecker(true),
            (<Navigate to={"/"} replace />),
            localStorage.setItem("token", JSON.stringify(value.email)))
          : toast.error("sizning password toki emailingiz xato")
      );
    });
    reset();
  };
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] py-10 ">
      <div className="flex flex-col gap-3 w-[50%] mx-auto">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[#313131] text-[40px] font-semibold">Login</h1>
          <p className="font-semibold text-[#313131] ">
            Login to access your travelwise account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(loginFunc)}
          className="flex flex-col gap-5"
        >
          <TextField {...register("email")} className="" label="Email" />
          <TextField
            {...register("password")}
            className=""
            type="password"
            label="Password"
          />

          <label className="flex items-center mb-4">
            <Checkbox />
            <span className="text-gray-700">Remember me</span>
            <Link
              to="/forgotPassword"
              className="ml-auto text-red-400 text-sm mr-3"
            >
              Forgot Password
            </Link>
          </label>
          {checker ? (
            <Button
              type="submit"
              onClick={() => navigate("/")}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#5A42D1",
                ":hover": { backgroundColor: "#4a38b0" },
              }}
            >
              go to userPage
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#5A42D1",
                ":hover": { backgroundColor: "#4a38b0" },
              }}
            >
              Login
            </Button>
          )}
        </form>
        <p className="text-center flex items-center gap-2 text-gray-700 mt-4">
          Don’t have an account?
          <Link to="/register" className="text-red-400 font-semibold">
            Sign up
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">Or login with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-between gap-4">
          <Button variant="outlined" fullWidth className="mr-2">
            <FacebookSharp className="text-blue-600" />
          </Button>
          <Button variant="outlined" fullWidth className="mx-2">
            <Google className="text-green-700" />
          </Button>
          <Button variant="outlined" fullWidth className="ml-2">
            <Apple className="text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};
//

export default Login;
