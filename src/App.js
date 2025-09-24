import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "src/reducers/counterSlice";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile";
import { useNavigate } from "react-router";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
