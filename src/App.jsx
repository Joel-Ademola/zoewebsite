import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import EventDetail from "./Pages/EventDetail";
import Registrations from "./Pages/Registrations";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content (pushes footer down) */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<EventDetail />} />
          <Route path="/event/fit25-reg" element={<Registrations />} />
        </Routes>
      </div>

      {/* Footer (always at the bottom) */}
      <Footer />
    </div>
    </>
  );
}

export default App;
