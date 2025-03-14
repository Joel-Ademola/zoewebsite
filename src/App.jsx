import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import EventDetail from "./Pages/EventDetail";  

function App() {
  return (
    <>
      {/* <div className="min-h-screen"> */}
      <div className="relative isolate lg:px-0  bg-[#ffffff] min-h-screen flex flex-row">
        <div className="flex-1  mx-auto ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<EventDetail />} />
            {/* <Route path="/" element={<Home />} />
                <Route path="/about/journal" element={<About />} />
                <Route path="/about/submission" element={<SubmissionGuide />} />
                <Route path="/about/privacy" element={<Privacy />} />
                <Route path="/current" element={<Current />} />
                <Route path="/archives" element={<Archives />} />
                <Route
                  path="/author-guide/call4Paper"
                  element={<Call4Paper />}
                />
                <Route
                  path="/author-guide/guidelines"
                  element={<Guidelines />}
                />
                <Route path="/journal-policies" element={<JournalPolicies />} />
                <Route path="/journal-detail/:id" element={<JournalDetail />} />
                <Route
                  path="/editorial-board/editorial-board-team"
                  element={<Editorial_Board />}
                />
                <Route
                  path="/editorial-board/editorial-Advisory-team"
                  element={<Editorial_Advisor />}
                />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route
                  path="/login"
                  element={user ? <Navigate to="/dashboard" /> : <Login />}
                /> */}
          </Routes>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
