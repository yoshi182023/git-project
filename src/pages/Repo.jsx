import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
{
  /* <Link to={`/profile/${username}/repo/${project.name}`}> */
}
{
  /* `/profile/:username/repo/:reponame` */
}
export default function Repo() {
  let { username, reponame } = useParams();
  const [repo, setRepo] = useState({});
  async function getRepo() {
    const data = await fetch(
      `https://api.github.com/repos/${username}/${reponame}`
    ).then((res) => res.json());
    console.log(data);
    setRepo(data);
  }
  useEffect(() => {
    getRepo();
  }, []);

  return (
    <div>
      <span>full description: {repo.description}</span>
      <span>forks:{repo.forks}</span>
      <span> issues number:{repo.open_issues}</span>
    </div>
  );
  // `https://api.github.com/repos/{username}/{repo}`;
}
