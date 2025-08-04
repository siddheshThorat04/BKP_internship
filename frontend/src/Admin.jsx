import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function AdminPanel() {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  const backend_endpoint = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    async function fetchInterns() {
      try {
        const response = await fetch(`${backend_endpoint}/api/admin/interns`);
        const data = await response.json();
        setInterns(data.interns);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching interns", err);
        setLoading(false);
      }
    }

    fetchInterns();
  }, []);

  const deleteIntern = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this intern?"
    );
    if (confirm) {
      const response = await fetch(
        `${backend_endpoint}/api/admin/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success(response.msg);
        window.location.reload();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          Admin Panel – Intern Management
        </h1>

        {loading ? (
          <p className="text-center text-lg text-gray-600">
            Loading interns...
          </p>
        ) : interns.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No interns found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-orange-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">College</th>
                  <th className="p-3 text-left">Branch</th>
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-left">Mobile</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {interns.map((intern) => (
                  <tr  onClick={() => window.location.href = `/profile/${intern._id}`}   key={intern._id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{intern.name}</td>
                    <td className="p-3">{intern.email}</td>
                    <td className="p-3">{intern.college}</td>
                    <td className="p-3">{intern.branch}</td>
                    <td className="p-3">{intern.year}</td>
                    <td className="p-3">{intern.mobile}</td>
                    <td className="p-3 capitalize">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          intern.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {intern.status}
                      </span>
                    </td>
                    <td className="p-3 space-x-2">
                      {intern.status === "pending" && (
                        <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs">
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => deleteIntern(intern._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
