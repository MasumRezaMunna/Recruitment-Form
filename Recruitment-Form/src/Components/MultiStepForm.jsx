import React, { useState } from "react";
import Step1Personal from "./steps/Step1Personal";
import Step2Skills from "./steps/Step2Skills";
import Step3Membership from "./steps/Step3Membership";
import { toast } from "react-toastify";

export default function MultiStepForm({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: "",
    email: "",
    studentId: "",
    phone: "",
    semester: "",
    batch: "",
    // Step 2
    interests: [],
    skills: [],
    github: "",
    facebook: "",
    linkedIn: "",
    cv: "",
    // Step 3
    whyJoin: "",
    projectIdeas: "",
  });

  // Handle standard text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  // Handle array toggles (Interests/Skills)
  const handleArrayToggle = (category, item) => {
    const currentArray = formData[category];
    if (currentArray.includes(item)) {
      setFormData({
        ...formData,
        [category]: currentArray.filter((i) => i !== item),
      });
    } else {
      setFormData({ ...formData, [category]: [...currentArray, item] });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = () => {
    console.log("Final Data:", formData);
    // Here you would send data to backend
    toast("Application Submitted Successfully!");
    onClose();
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex justify-center">
      <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl">
        {/* Header Section inside form */}
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-900/30 text-blue-400 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-blue-800">
            Applications Open
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Join Development Wing
          </h1>
          <p className="text-gray-400">
            Transform your skills and build your future.
          </p>
        </div>

        {/* Registration Status Box */}
        <div className="bg-red-900/20 border border-red-900/50 p-4 rounded-lg mb-8">
          <h3 className="text-red-500 font-bold text-lg">
            Registration Notice
          </h3>
          <p className="text-red-400/70 text-sm">
            Please ensure all information provided is accurate before
            submitting.
          </p>
        </div>

        {/* Render Step Based on State */}
        {step === 1 && (
          <Step1Personal
            data={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <Step2Skills
            data={formData}
            handleChange={handleChange}
            handleArrayToggle={handleArrayToggle}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}
        {step === 3 && (
          <Step3Membership
            data={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            submitForm={submitForm}
          />
        )}
      </div>
    </div>
  );
}
