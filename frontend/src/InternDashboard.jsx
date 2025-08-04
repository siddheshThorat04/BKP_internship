import React from "react";
import { useAuthContext } from "./context/authContext";

export default function InternDashboard() {
  const {authUser} = useAuthContext()
const user=authUser;
  if (!user) {
    return <div className="p-8 text-center">Loading your dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Welcome, {user.name} 👋</h1>
        
        {/* Profile Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>College:</strong> {user.college}</p>
            <p><strong>Branch:</strong> {user.branch}</p>
            <p><strong>Year:</strong> {user.year}</p>
          </div>
        </div>

        {/* Notices Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">📢 Notices</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Orientation call on Sunday at 6 PM via Google Meet.</li>
            <li>Submit weekly report by Friday 5 PM.</li>
            <li>Join our WhatsApp group if you haven’t: <a href="https://chat.whatsapp.com/example" className="text-blue-600 underline">Click Here</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">📚 Resources</h2>
          <ul className="list-disc pl-5 text-blue-700">
            <li><a href="/docs/teaching-guide.pdf" className="underline" target="_blank">Teaching Guide PDF</a></li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="underline">Classroom Tips Video</a></li>
          </ul>
        </div>

        {/* Logout */}
        <div className="text-right">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() => alert("Logging out...")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
