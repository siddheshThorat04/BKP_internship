import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InternProfile() {
  const [internId] = useState(useParams().id); // Initialize with the internId from the URL .id);
    const [intern, setintern] = useState(null);
  useEffect(() => {
    async function fetchIntern() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/profile/${internId}`); // Replace with your API endpoint
        const data = await response.json();
        setintern(data.intern);
      } catch (err) {
        console.error("Error fetching intern", err);
      }
    }

    fetchIntern();
  }, []);

  if (!intern) return <div className="p-8 text-center">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Intern Profile</h1>

        {/* Intern Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
          <p><strong>Name:</strong> {intern.name}</p>
          <p><strong>Email:</strong> {intern.email}</p>
          <p><strong>Mobile:</strong> {intern.mobile}</p>
          <p><strong>College:</strong> {intern.college}</p>
          <p><strong>Branch:</strong> {intern.branch}</p>
          <p><strong>Year:</strong> {intern.year}</p>
          <p><strong>Joined On:</strong> {intern.joinedOn}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`font-semibold ${intern.status === "approved" ? "text-green-600" : intern.status === "pending" ? "text-yellow-600" : "text-red-600"}`}>
              {intern.status}
            </span>
          </p>
        </div>

        {/* Optional Certificate / Tasks */}
        {intern.status === "approved" && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Your Resources</h2>
            <ul className="list-disc pl-6 text-blue-600">
              <li><a href="/certificate.pdf" target="_blank" className="underline">Download Internship Certificate</a></li>
              <li><a href="/weekly-report-template.docx" target="_blank" className="underline">Weekly Report Template</a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" className="underline">Join WhatsApp Group</a></li>
            </ul>
          </div>
        )}

        {/* Logout */}
        <div className="mt-8 text-right">
          <button
            onClick={() => alert("Logging out...")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
