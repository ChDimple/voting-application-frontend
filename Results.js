import React, { useState, useEffect } from "react";
import { getPolls } from "../services/api";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Results = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const data = await getPolls();
      setPolls(data);
    };
    fetchPolls();

    socket.on("voteUpdated", (updatedPoll) => {
      setPolls((prevPolls) =>
        prevPolls.map((p) => (p._id === updatedPoll._id ? updatedPoll : p))
      );
    });

    return () => socket.off("voteUpdated");
  }, []);

  return (
    <div>
      <h1>Poll Results</h1>
      {polls.map((poll) => (
        <div key={poll._id}>
          <h2>{poll.question}</h2>
          <ul>
            {poll.options.map((option, index) => (
              <li key={index}>
                {option.text} - {option.votes} votes
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Results;
