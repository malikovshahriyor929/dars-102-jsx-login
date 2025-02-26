import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://679b903633d316846324525e.mockapi.io";
let email = localStorage.getItem("token");
const Home = () => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${baseUrl}/lavashxona`)
      .then((res) => {
        res.data.filter((value) =>
          value.email == email.trim()
            ? (setUser(res.data), console.log(value))
            : toast.error("boshqaddan kiring nimadur xato ")
        );
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [user, baseUrl, window.location.reload]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <section>
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#5A42D1]">TravelWise</h1>
          <div className="flex gap-4">
            <Button
              onClick={() => (navigate("/login"), localStorage.clear())}
              variant="outlined"
              sx={{ borderColor: "#5A42D1", color: "#5A42D1" }}
            >
              Log out
            </Button>
          </div>
        </nav>
      </section>
      <section className="text-center py-16 bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to TravelWise</h1>
        <p className="mt-4 text-lg">Your journey starts here!</p>
      </section>
      <footer className="text-center py-6 bg-white shadow-md mt-10">
        <p className="text-gray-600">© 2025 TravelWise. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
