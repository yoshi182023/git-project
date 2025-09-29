import { Route, Routes, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function List() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.user);
  let { username } = useParams();

  async function getList() {
    const data = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=10&page=${page}`
    ).then((res) => res.json());
    console.log(data);
    setList(data);
  }
  useEffect(() => {
    getList();
  }, [page]);
  const handlePrevious = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    setPage(page - 0 + 1);
  }; //ParseInt
  const handlePageChange = (e) => {
    setPage(e.target.value);
  };
  // const handleKeyDown = (e) => {
  //   if (e.ctrlKey && e.key === "Enter") {
  //     e.preventDefault();
  //     // 简单触发表单提交，让 form action 处理
  //     e.currentTarget.form?.requestSubmit();
  //   }
  // };
  return (
    <>
      <div>
        <label>List:</label>
        {list.map((project) => {
          return (
            <div key={project.id}>
              <span>repo names: {project.name}</span>
              <div>stars: {project.stargazers_count} </div>
              <span> languages: {project.language} </span>
            </div>
          );
        })}
        <span>Twitter:{userInfo.twitter_username}</span>
      </div>
      {/* <Pagination
        count={20}
        page={page - 0}
        onChange={(e, page) => {
          console.log("page", page);
          setPage(page);
        }}
      /> */}

      <button onClick={handlePrevious}> Previous page </button>
      <input value={page} onChange={handlePageChange} />
      <button onClick={handleNext}> Next page</button>
    </>
  );
}

export default List;
