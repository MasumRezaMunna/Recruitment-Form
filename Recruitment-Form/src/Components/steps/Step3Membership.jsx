import React from "react";
import { toast } from "react-toastify";

export default function Step3Membership({
  data,
  handleChange,
  prevStep,
  submitForm,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.whyJoin) {
      toast("Please complete all required fields.");
      return;
    }
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fadeIn">
      

      {/* Section 5: Tell Us More */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
            5
          </span>
          Tell Us More
        </h2>

        <div className="ml-11 space-y-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Why do you want to join?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="whyJoin"
              value={data.whyJoin}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="Share your motivation, goals, and what you hope to achieve..."
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Do you have any project ideas in mind?
            </label>
            <textarea
              name="projectIdeas"
              value={data.projectIdeas}
              onChange={handleChange}
              rows="3"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="Share any project ideas you'd like to build during the program..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg w-full md:w-auto ml-4"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}
