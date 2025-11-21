import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MultiStepForm from "./components/MultiStepForm";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="font-sans text-white">
      <ToastContainer position="top-right" />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<MultiStepForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
