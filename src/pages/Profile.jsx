import { useParams } from "react-router";
import { useEffect } from "react";
export default function Profile() {
  let { username } = useParams();
  //https://api.github.com/users/{username}`

  async function getUser() {
    const data = await fetch(`https://api.github.com/users/${username}`);

    console.log("data", data);
  }
  useEffect(() => {
    getUser();
  }, []);
  return <div>Profile</div>;
}
