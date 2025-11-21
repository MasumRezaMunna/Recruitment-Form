import React from "react";
import { toast } from "react-toastify";

const interestsOptions = [
  "Web Development",
  "Mobile Development",
  "HR"
  
];
const skillOptions = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Git",
  "SQL",
  "MongoDB",
  "Docker",
  "AWS",
  "None (Beginner)",
  "Others"
];

export default function Step2Skills({
  data,
  handleArrayToggle,
  handleChange,
  prevStep,
  nextStep,
}) {
  const handleNext = () => {
    if (data.interests.length === 0 || data.skills.length === 0) {
      toast("Please select at least one interest and one skill.");
      return;
    }
    nextStep();
  };

  return (
    <div className="animate-fadeIn">
      {/* Section 2: Areas of Interest */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
            2
          </span>
          Areas of Interest <span className="text-red-500 ml-1">*</span>
        </h2>
        <p className="text-gray-400 text-sm mb-4 ml-11">
          Select all that apply or add your own
        </p>

        <div className="flex flex-wrap gap-3 ml-11">
          {interestsOptions.map((item) => (
            <button
              key={item}
              onClick={() => handleArrayToggle("interests", item)}
              className={`px-4 py-2 rounded-md border transition ${
                data.interests.includes(item)
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Section 3: Current Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
            3
          </span>
          Current Skills <span className="text-red-500 ml-1">*</span>
        </h2>
        <p className="text-gray-400 text-sm mb-4 ml-11">
          Select your current skill level
        </p>

        <div className="flex flex-wrap gap-3 ml-11">
          {skillOptions.map((item) => (
            <button
              key={item}
              onClick={() => handleArrayToggle("skills", item)}
              className={`px-4 py-2 rounded-md border transition ${
                data.skills.includes(item)
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Section 4: Social Profiles */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
            4
          </span>
          Social Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              GitHub Profile
            </label>
            <input
              type="text"
              name="github"
              value={data.github}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="https://github.com/username"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              Facebook Profile
            </label>
            <input
              type="text"
              name="facebook"
              value={data.facebook}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="https://facebook.com/username"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              LinkedIn Profile
            </label>
            <input
              type="text"
              name="linkedIn"
              value={data.linkedIn}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="https://linkedIn.com/username"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">
              CV (Google Drive Link)
            </label>
            <input
              type="text"
              name="cv"
              value={data.cv}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
              placeholder="https://"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
