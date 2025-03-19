import { useState, useEffect } from "react";
import { campus } from "../assets";
import axios from "axios";

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAttendant, setSelectedAttendant] = useState(null);

  // Preload Dummy Data for Testing
  useEffect(() => {
    axios
      .get("https://zoeweb-opal.vercel.app/registrations")
      .then((response) => {
        setRegistrations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the registrations!", error);
        setLoading(false);
      });
    const dummyData = [
      {
        id: 1,
        name: "John Doe",
        gender: "Male",
        phone: "123-456-7890",
        email: "johndoe@example.com",
        ageBracket: "18-25",
        volunteerTeams: ["Community Service", "Event Planning"],
        attendants: [
          { name: "Michael Doe", gender: "Male" },
          { name: "Sarah Doe", gender: "Female" },
        ],
        additionalInfo: "Loves to help out in tech events.",
      },
      {
        id: 2,
        name: "Jane Smith",
        gender: "Female",
        phone: "987-654-3210",
        email: "janesmith@example.com",
        ageBracket: "26-35",
        volunteerTeams: ["Marketing", "Logistics"],
        attendants: [{ name: "Emily Smith", gender: "Female" }],
        additionalInfo: "Has experience in social media marketing.",
      },
      {
        id: 3,
        name: "Alice Johnson",
        gender: "Female",
        phone: "555-666-7777",
        email: "alicej@example.com",
        ageBracket: "36-45",
        volunteerTeams: ["Finance", "Fundraising"],
        attendants: [], // No attendants for this user
        additionalInfo: "Background in non-profit finance management.",
      },
    ];

    // Simulate loading time
    setTimeout(() => {
      setRegistrations(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        className="bg-fixed bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${campus})`, height: "55vh" }}
      >
        <div className=" absolute bg-black min-w-full min-h-[55vh] opacity-70">
          <div className="relative"></div>
        </div>
        <div className="relative isolate px-6 lg:px-8 sm:pt-40 pt-20 min-h-[55vh]">
          <h1 className="text-5xl  tracking-tight uppercase text-balance text-white font-bold sm:text-7xl">
            Fit for the Master’s Use
          </h1>
          <p className="mt-8 text-2xl font-medium text-pretty text-white sm:text-lg">
            12 - 15 JUNE 2025
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Registrations</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">#</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Gender</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration, index) => (
                  <tr key={registration.id} className="hover:bg-gray-100">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{registration.name}</td>
                    <td className="border p-2">{registration.gender}</td>
                    <td className="border p-2">{registration.phone}</td>
                    <td className="border p-2">{registration.email}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => setSelectedAttendant(registration)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        View More
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {selectedAttendant && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {selectedAttendant.name}
              </h2>
              <p>
                <strong>Gender:</strong> {selectedAttendant.gender}
              </p>
              <p>
                <strong>Phone:</strong> {selectedAttendant.phone}
              </p>
              <p>
                <strong>Email:</strong> {selectedAttendant.email}
              </p>
              <p>
                <strong>Age Bracket:</strong> {selectedAttendant.ageBracket}
              </p>
              <p>
                <strong>Volunteer Teams:</strong>{" "}
                {selectedAttendant.volunteerTeams.join(", ")}
              </p>

              {/* Display Attendants */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Attendants</h3>
                {selectedAttendant.attendants.length > 0 ? (
                  <ul className="list-disc ml-4">
                    {selectedAttendant.attendants.map((att, idx) => (
                      <li key={idx}>
                        {att.name} ({att.gender})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No attendants available.</p>
                )}
              </div>

              {/* Additional Info */}
              {selectedAttendant.additionalInfo && (
                <p className="mt-4">
                  <strong>Additional Info:</strong>{" "}
                  {selectedAttendant.additionalInfo}
                </p>
              )}

              <button
                onClick={() => setSelectedAttendant(null)}
                className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
