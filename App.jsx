import { useState } from "react";

function App() {
  const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🗳 Voting App</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Which option do you prefer?</h2>

        <button
          onClick={() => handleVote("optionA")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
        >
          Option A ({votes.optionA})
        </button>

        <button
          onClick={() => handleVote("optionB")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Option B ({votes.optionB})
        </button>
      </div>

      <div className="mt-6 bg-white shadow-md rounded-xl p-4 w-80 text-center">
        <h2 className="text-lg font-semibold">Live Results</h2>
        <p className="mt-2">✅ Option A: {votes.optionA} votes</p>
        <p>✅ Option B: {votes.optionB} votes</p>
      </div>
    </div>
  );
}

export default App;
