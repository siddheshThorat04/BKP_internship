import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./context/authContext";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backend_endpoint = import.meta.env.VITE_BACKEND_URL ;
  const {  setauthUser } = useAuthContext();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending payload:", { email, password });
      console.log(backend_endpoint);
      const res = await fetch(`${backend_endpoint}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        toast.success("Login successful");
        localStorage.setItem("bkpAuth", JSON.stringify(data.user));
        setauthUser(data.user);
        window.location.href = "/intern";
      } else {
        console.error("Login failed");
        const errText = await res.text();
        console.log("Error Response:", errText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white p  -4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between">
          <div>
            <img
              src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti-Ki-Pathshala-Official-Logo.jpg"
              alt="Login"
              className="h-40 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Please Sign in to continue.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />

              <button
                onClick={onSubmit}
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="text-sm text-center mt-6">
            Don’t have account?{" "}
            <Link to="/join" className="text-blue-500 cursor-pointer">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
