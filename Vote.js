import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPolls, submitVote } from "../services/api";

const Vote = () => {
  const { pollId } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      const polls = await getPolls();
      const selectedPoll = polls.find((p) => p._id === pollId);
      setPoll(selectedPoll);
    };
    fetchPoll();
  }, [pollId]);

  const handleVote = async (optionIndex) => {
    await submitVote(pollId, optionIndex);
    alert("Vote Submitted!");
  };

  return poll ? (
    <div>
      <h2>{poll.question}</h2>
      {poll.options.map((option, index) => (
        <button key={index} onClick={() => handleVote(index)}>
          {option.text}
        </button>
      ))}
    </div>
  ) : (
    <p>Loading poll...</p>
  );
};

export default Vote;
