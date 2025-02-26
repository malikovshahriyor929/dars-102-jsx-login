import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://679b903633d316846324525e.mockapi.io";
let email = JSON.parse(localStorage.getItem("token"));
const Home = () => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${baseUrl}/lavashxona`) // Fetch user with id "1"
      .then((res) => {
        res.data.filter((value) =>
          value.email == email.trim()
            ? (setUser(res.data), console.log(value))
            : (toast.error("boshqaddan kiring nimadur xato "),
              navigate("/login"))
        );
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [user, baseUrl, window.location.reload]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-400 to-indigo-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to TravelWise</h1>
        <p className="mt-4 text-lg">Your journey starts here!</p>
      </section>

      {/* User Info Section */}
      <section className="py-10 px-5">
        <h2 className="text-center text-3xl font-semibold text-gray-800">
          User Information
        </h2>
        {user ? (
          <Card className="max-w-md mx-auto mt-6 shadow-lg">
            <CardContent>
              <Typography variant="h5" className="font-bold">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography color="textSecondary">Email: {user.email}</Typography>
              <Typography color="textSecondary">
                Phone: {user.phoneNumber}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <p className="text-center text-gray-600 mt-6">Loading user data...</p>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white shadow-md mt-10">
        <p className="text-gray-600">© 2025 TravelWise. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
