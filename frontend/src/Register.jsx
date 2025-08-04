import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "./context/authContext";

export default function AuthPage() {
    const branches=[{id:1,name:"CSE"},{id:2,name:"IT"},{id:3,name:"ECE"},{id:4,name:"EEE"},{id:5,name:"MECH"},{id:6,name:"CIVIL"}]
    const years=[{id:1,name:"1st"},{id:2,name:"2nd"},{id:3,name:"3rd"},{id:4,name:"4th"}]
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [college, setCollege] = useState("")
    const [branch, setBranch] = useState("")
    const [year, setYear] = useState("")
    const [password, setPassword] = useState("")
    const { setauthUser} = useAuthContext();
    const backend_endpoint = import.meta.env.VITE_BACKEND_URL ;

    const onSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: Name,
    email,
    mobile,
    college,
    branch,
    year,
    password,
  };

  console.log("Sending payload:", data);

  try {
    const res = await fetch(`${backend_endpoint}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
        toast.error(errorData.msg);
      console.error("Server responded with error:", errorData); 

    } else {
      const result = await res.json();
      toast.success("User registered successfully");
      localStorage.setItem("bkpAuth", JSON.stringify(result.user));
      setauthUser(result.user);
      console.log("Success:", result);
    }
  } catch (err) {
    console.error("Network or parsing error:", err);
  }
};

  return (
        <div className="bg-white  w-96 m-auto  rounded-3xl shadow-lg p-8 flex flex-col justify-between">
          <div>
            <img src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti-Ki-Pathshala-Official-Logo.jpg" alt="Register" className="h-40 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">Register</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Please register to login.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <input
                type="number"
                maxLength={10}
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <input
                type="text"
                placeholder="College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}    
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <div className="w-full px-4 py-3 flex gap-2 rounded-lg bg-gray-100 focus:outline-none" >
              Branch: 
              <select name="branch"  onChange={(e) => setBranch(e.target.value)}  id="">
                  <option className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"  value={0}>Select Branch</option>

                {branches.map((branch)=>{

                  return <option className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none" key={branch.id}  value={branch.name}>{branch.name}</option>
                })}
              </select>
              </div>
              <div className="w-full px-4 py-3 flex gap-2 rounded-lg bg-gray-100 focus:outline-none" >
              Current Year: 
              <select name="branch"   onChange={(e) => setYear(e.target.value)}  id="">
                <option className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"  value={0}>Select Year</option>
                {years.map((branch)=>{
                  return <option className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"  key={branch.id}   value={branch.id}>{branch.name}</option>
                })}
              </select>
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remind me next time
                </label>
              </div>
              <button onClick={onSubmit}  className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold">
                Sign Up
              </button>
            </div>
          </div>

          <p className="text-sm text-center mt-6">
            Already have account? <Link to="/login" className="text-blue-500 cursor-pointer">Sign in</Link>
          </p>
        </div>
  );
}
