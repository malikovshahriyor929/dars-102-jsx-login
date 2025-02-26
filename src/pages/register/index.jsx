import React, { useEffect } from "react";
import { Button, Checkbox, TextField, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Google,
  Apple,
  VisibilityOff,
  FacebookSharp,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { registerFunction, setUsers } from "../../redux/loginSlice";
const Register = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.LoginSlice);
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let registerFunc = (data) => {
    dispatch(registerFunction(data));
    reset();
  };

  const baseUrl = "https://679b903633d316846324525e.mockapi.io";
  useEffect(() => {
    axios.get(`${baseUrl}/lavashxona`).then((res) => {
      dispatch(setUsers(res.data));
      console.log(res);
    });
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[50%]">
        <h2 className="text-2xl font-bold mb-2">Sign up</h2>
        <p className="text-gray-600 mb-4">
          Let’s get you all set up so you can access your personal account.
        </p>

        <form onSubmit={handleSubmit(registerFunc)}>
          <div className="grid grid-cols-2 gap-4">
            <TextField
              {...register("FirstName")}
              label="First Name"
              fullWidth
            />
            <TextField {...register("lastName")} label="Last Name" fullWidth />
            <TextField {...register("email")} label="Email" fullWidth />
            <TextField
              {...register("phoneNumber")}
              label="Phone Number"
              fullWidth
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <TextField
              {...register("password")}
              label="Password"
              type="password"
              fullWidth
              className="mt-4"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <VisibilityOff />
                  </IconButton>
                ),
              }}
            />
            <TextField
              {...register("confirm")}
              label="Confirm Password"
              type="password"
              fullWidth
              className="mt-4"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <VisibilityOff />
                  </IconButton>
                ),
              }}
            />
          </div>

          <div className="flex items-center mt-4">
            <Checkbox />
            <span className="text-gray-700">
              I agree to all the{" "}
              <a href="#" className="text-red-400">
                Terms
              </a>
              and
              <a href="#" className="text-red-400">
                Privacy Policies
              </a>
            </span>
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="!my-2"
            sx={{
              backgroundColor: "#5A42D1",
              ":hover": { backgroundColor: "#4a38b0" },
            }}
          >
            Create account
          </Button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?
          <Link to="/login" className="text-red-400 font-semibold">
            Login
          </Link>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">Or Sign up with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-between gap-6">
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

export default Register;
