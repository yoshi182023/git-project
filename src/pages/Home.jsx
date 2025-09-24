import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "src/reducers/counterSlice";
import { Route, Routes } from "react-router";
//import Profile from "./pages/Profile";
import { useNavigate } from "react-router";

function Home() {
  const count = useSelector((state) => state.counter.value);
  const [username, setUsername] = useState("bubucuo");
  //const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <label>
        Input a username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      {/* 跳转路由 */}
      <button
        onClick={(e) => {
          navigate(`/profile/${username}`);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Home;
