import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Divider } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Apple, Facebook, FacebookSharp, Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";

const ForgetPassword = () => {
  let [checker, setChecker] = useState(false);
  let navigate = useNavigate();
  let { register, reset, handleSubmit } = useForm();
  let email = localStorage.getItem("token") || [];

  let [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://679b903633d316846324525e.mockapi.io/lavashxona")
      .then((res) => setState(res.data));
  }, []);

  let Forgot = (formValue) => {
    state.filter((value) => {
      if (formValue.email == value.email) {
        <Navigate to="forgotSet" />;
        setChecker(true);
      } else if (formValue.email !== value.email) {
        <Navigate replace to={"/register"} />;
        toast.error("iltomos qaytadan uruning");
      } else {
        <Navigate replace to={"/register"} />;
      }
    });
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[40%] text-center">
        <Link to={"/login"}>
          <button className="text-gray-600 text-sm mb-4 text-left w-full">
            &larr; Back to login
          </button>
        </Link>
        <h2 className="text-2xl font-bold mb-2 text-start py-1">
          Forgot your password?
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </p>
        <form onSubmit={handleSubmit(Forgot)} className=" flex flex-col gap-4">
          <TextField
            {...register("email")}
            fullWidth
            label="Email"
            variant="outlined"
            className="mb-4"
          />
          {checker ? (
            <Button
              type="submit"
              onClick={() => navigate("/forgotSet")}
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#6C5DD3", "&:hover": { bgcolor: "#5b4bc9" } }}
            >
              go next page
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#6C5DD3", "&:hover": { bgcolor: "#5b4bc9" } }}
            >
              Submit
            </Button>
          )}
        </form>
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-between gap-5">
          <button className="border border-gray-300 rounded-xl p-2 w-1/3 flex justify-center items-center text-gray-600 hover:bg-gray-100">
            <FacebookSharp color="primary" size={20} />
          </button>
          <button className="border border-gray-300 rounded-xl p-2 w-1/3 flex justify-center items-center text-gray-600 hover:bg-gray-100">
            <Google className="text-greeb-700" size={20} />
          </button>
          <button className="border border-gray-300 rounded-xl p-2 w-1/3 flex justify-center items-center text-gray-600 hover:bg-gray-100">
            <Apple className="text-black" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
