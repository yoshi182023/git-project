import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "src/reducers/counterSlice";
import { Route, Routes } from "react-router";
//import Profile from "./pages/Profile";
import { useNavigate } from "react-router";
import { Link } from "react-router";
function Home() {
  const [username, setUsername] = useState("bubucuo");
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);
  return (
    <div>
      <label>
        Input a username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      {/* 跳转路由 */}
      <button
        onClick={(e) => {
          navigate(`profile/${username}`);
        }}
      >
        Search
      </button>
      <Link to={`list/${username}`}> List</Link>
      <span>Twitter:{userInfo.twitter_username}</span>
    </div>
  );
}

export default Home;
