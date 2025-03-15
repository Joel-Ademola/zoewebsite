import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const [attendants, setAttendants] = useState([]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
    setIsOpen(false); // Close modal after submission
  };

  const handleAddAttendant = () => {
    setAttendants([...attendants, { name: "", gender: "" }]);
  };

  const handleRemoveAttendant = (index) => {
    setAttendants(attendants.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center mt-10">
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Registration Form
      </button>

      {/* Modal/Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        {/* Centered Modal */}
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-center mb-4">
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
              
              {/* Name & Gender */}
              <div>
                <label className="block font-medium">Your Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-medium">Gender</label>
                <select {...register("gender")} className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Marital Status */}
              <div>
                <label className="block font-medium">Are you single or married?</label>
                <select {...register("maritalStatus")} className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select one</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>

              {/* Sharing Room */}
              <div>
                <label className="block font-medium">Are you sharing a room?</label>
                <select {...register("sharingRoom")} className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Contact Info */}
              <div>
                <label className="block font-medium">Phone Number</label>
                <input
                  {...register("phone", { required: "Phone number is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter phone number"
                  type="tel"
                />
              </div>

              <div>
                <label className="block font-medium">Email Address</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter email"
                  type="email"
                />
              </div>

              {/* Attendants Section */}
              <div>
                <label className="block font-medium">Names & Gender of Attendants</label>
                {attendants.map((_, index) => (
                  <div key={index} className="flex space-x-4 mb-2">
                    <input
                      {...register(`attendants[${index}].name`)}
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Attendant's name"
                    />
                    <select {...register(`attendants[${index}].gender`)} className="p-2 border border-gray-300 rounded">
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => handleRemoveAttendant(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddAttendant}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Attendant
                </button>
              </div>

              {/* Age Bracket */}
              <div>
                <label className="block font-medium">Age Bracket</label>
                <select {...register("ageBracket")} className="w-full p-2 border border-gray-300 rounded">
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
                <label className="block font-medium">Conference Volunteer Opportunities</label>
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
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      {...register("volunteerTeams")}
                      value={team}
                      className="w-4 h-4"
                    />
                    <label>{team}</label>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-green-500 text-white p-3 rounded">
                Submit Registration
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
