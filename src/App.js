import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "src/reducers/counterSlice";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile";
import { useNavigate } from "react-router";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import List from "./pages/List";
import Repo from "./pages/Repo";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="profile/:username" element={<Profile />} />
          {/* 动态路由 */}
          <Route path="list/:username" element={<List />} />
          <Route path="profile/:username/repo/:reponame" element={<Repo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
