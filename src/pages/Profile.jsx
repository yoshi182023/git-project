import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({
    Name: "",
    avatar: "",
    followers: "0",
    bio: "",
  });

  let { username } = useParams();
  //https://api.github.com/users/{username}`

  async function getUser() {
    const data = await fetch(`https://api.github.com/users/${username}`).then(
      (res) => res.json()
    );
    try {
      setUserInfo(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  const dispatch = useDispatch();
  const getUser2 = () => {
    dispatch({ type: "ABC", payload: username });
  };
  useEffect(() => {
    //getUser();
    getUser2();
  }, []);

  return (
    <>
      <div>Profile:</div>
      <span>Name:{userInfo.login}</span>
      <span>Followers: {userInfo.followers}</span>
      <span>Bio: {userInfo.bio}</span>
      <img alt="useravatar" src={userInfo.avatar} />
      <Link to="/"> Home </Link>
    </>
  );
}
