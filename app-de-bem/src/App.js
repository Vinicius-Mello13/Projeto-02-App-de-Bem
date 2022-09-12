import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./pages/1. Loading";
import { Username } from "./pages/3.1 Sign Up";
import { SignUp } from "./pages/3.2 Sign Up";
import { PrivateTalk } from "./pages/4. Private Talk";

export default function App() {
    return (
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/username" element={<Username />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privatetalk" element={<PrivateTalk />} />
      </Routes>
    )
  }

