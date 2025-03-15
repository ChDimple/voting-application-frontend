import React, { useState, useEffect } from "react";
import { getPolls } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const data = await getPolls();
      setPolls(data);
    };
    fetchPolls();
  }, []);

  return (
    <div>
      <h1>Active Polls</h1>
      <ul>
        {polls.map((poll) => (
          <li key={poll._id}>
            <Link to={`/poll/${poll._id}`}>{poll.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
