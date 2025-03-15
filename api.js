import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with backend URL

// Fetch all polls
export const getPolls = async () => {
  const response = await axios.get(`${API_URL}/polls`);
  return response.data;
};

// Submit a vote
export const submitVote = async (pollId, optionIndex) => {
  await axios.post(`${API_URL}/polls/${pollId}/vote`, { optionIndex });
};
