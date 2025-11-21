import React from "react";
import { toast } from "react-toastify";

export default function Step1Personal({ data, handleChange, nextStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation check
    if (!data.name || !data.email || !data.studentId || !data.phone) {
      toast("Please fill in all required fields");
      return;
    }
    nextStep(); 
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
          1
        </span>
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="Masum Reza Munna"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Email Address (University mail){" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="xxx-xx-xxx@diu.edu.bd"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Student ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="studentId"
            value={data.studentId}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="253-35-359"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Phone Number (WhatsApp) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="+8801763******"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">
            Current Semester <span className="text-red-500">*</span>
          </label>
          <select
            name="semester"
            value={data.semester}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select semester</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Batch</label>
          <input
            type="text"
            name="batch"
            value={data.batch}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="46"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
