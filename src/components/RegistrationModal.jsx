import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { Bars3Icon, XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [attendants, setAttendants] = useState([]);

  const [formData, setFormData] = useState({
    eventDetails: {},
    name: "",
    gender: "",
    maritalStatus: "",
    sharingRoom: "",
    phoneNumber: "",
    email: "",
    attendants: [],
    ageBracket: "",
    volunteerOpportunities: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
            ? [...(prev[name] || []), value] // Add checkbox value
            : (prev[name] || []).filter((v) => v !== value) // Remove checkbox value
          : value, // Handle text & select input
    }));
  };

  // Handle changes in attendant fields dynamically
  const handleAttendantChange = (index, e) => {
    const { name, value } = e.target;
    const updatedAttendants = [...formData.attendants];
    updatedAttendants[index] = { ...updatedAttendants[index], [name]: value };
    setFormData((prev) => ({
      ...prev,
      attendants: updatedAttendants,
    }));
  };

  // Add Attendant
  const handleAddAttendant = () => {
    setFormData((prev) => ({
      ...prev,
      attendants: [...prev.attendants, { name: "", gender: "" }],
    }));
  };

  // Remove Attendant
  const handleRemoveAttendant = (index) => {
    setFormData((prev) => ({
      ...prev,
      attendants: prev.attendants.filter((_, i) => i !== index),
    }));
  };
  // Submit Form

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://zoeweb-opal.vercel.app/register",
        formData
      );
      console.log("Form Data:", response.data);
      alert("Registration Successful!");
      setIsOpen(false); // Close modal after submission
      setFormData({
        name: "",
        gender: "",
        maritalStatus: "",
        sharingRoom: "",
        phoneNumber: "",
        email: "",
        ageBracket: "",
        volunteerOpportunities: [],
        attendants: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Registration Failed. Please try again.");
    }
  };
  return (
    <div className="flex justify-center mt-10">
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white cursor-pointer text-black px-4 py-2 rounded hover:bg-primary hover:text-white ease-in duration-200"
      >
        Get Register Now
      </button>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel
            className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg max-h-[95vh] overflow-y-auto "
            style={{ scrollbarWidth: "none" }}
          >
            <Dialog.Title className="text-2xl font-bold text-center">
              Conference Registration
            </Dialog.Title>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Your Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border text-gray-700 text-sm border-gray-300 rounded"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Are you single or married?
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full p-2 border text-gray-700 text-sm border-gray-300 rounded"
                >
                  <option value="">Select one</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>

              {/* Sharing Room */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Are you sharing a room?
                </label>
                <select
                  name="sharingRoom"
                  value={formData.sharingRoom}
                  onChange={handleChange}
                  className="w-full p-2 border text-gray-700 text-sm border-gray-300 rounded"
                >
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Phone & Email */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter phone number"
                  type="tel"
                  required
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter email"
                  type="email"
                  required
                />
              </div>

              {/* Attendants */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Attendants
                </label>
                {formData.attendants.map((attendant, index) => (
                  <div key={index} className="flex space-x-4 mb-2">
                    {/* Attendant Name */}
                    <input
                      name="name"
                      value={attendant.name} // Corrected this part
                      onChange={(e) => handleAttendantChange(index, e)}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Attendant's name"
                    />

                    {/* Attendant Gender */}
                    <select
                      name="gender"
                      value={attendant.gender}
                      onChange={(e) => handleAttendantChange(index, e)}
                      className="p-2 border text-gray-700 text-sm border-gray-300 rounded"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>

                    {/* Remove Attendant Button */}
                    <button
                      type="button"
                      onClick={() => handleRemoveAttendant(index)}
                      className="text-red-500 px-3 py-1 rounded"
                    >
                      <TrashIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                ))}

                {/* Add Attendant Button */}
                <button
                  type="button"
                  onClick={handleAddAttendant}
                  className="mt-2 bg-primary text-sm cursor-pointer text-white px-4 py-2"
                >
                  Add Attendant
                </button>
              </div>
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Age Bracket
                </label>
                <select
                  name="ageBracket"
                  value={formData.ageBracket}
                  onChange={handleChange}
                  className="w-full text-gray-700 text-sm p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Age Bracket</option>
                  <option value="0-2">0-2</option>
                  <option value="2-10">2-10</option>
                  <option value="10-18">10-18</option>
                  <option value="18-20">18-20</option>
                  <option value="21-39">21-39</option>
                </select>
              </div>

              {/* Volunteer Opportunities */}
              <div>
                <label className="block font-medium text-gray-700 text-sm">
                  Conference Volunteer Opportunities
                </label>
                {[
                  "Media team",
                  "Music and worship team",
                  "Organization and logistics team",
                  "Bookstand and Kiosk",
                  "Stage management and Teardown",
                  "Usher, protocol, and security",
                  "Youth Ministry",
                  "Logistics/Venue Department",
                ].map((team, index) => (
                  <div
                    key={index}
                    className="flex text-gray-700 py-2 text-sm items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      name="volunteerOpportunities"
                      value={team}
                      checked={formData.volunteerOpportunities.includes(team)}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <label>{team}</label>
                  </div>
                ))}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full border cursor-pointer border-primary text-primary hover:bg-primary hover:text-white ease-in duration-200 p-3 rounded"
              >
                Submit Registration
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
