import React, { useState, useEffect } from 'react';

const questions = [
  {
    id: 1,
    question: "CHANGE ACTIVE VOICE TO PASSIVE VOICE: She is washing clothes?",
    options: [
      "Clothes are being washed by her",
      "Clothes is being washed by he",
      "Clothes was being washed by he",
      "Clothes is washed by he",
    ],
    answer: "Clothes are being washed by her"
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    answer: "Paris"
  },
  // Add more questions here
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
      {isSubmitted ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-2">Quiz Completed</h2>
          <p className="text-lg">Score: {score} / {questions.length}</p>
          <p className="text-lg">Percentage: {(score / questions.length) * 100}%</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="flex justify-between mb-4">
            <p>Time Left: {formatTime(timeLeft)}</p>
            <p>Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <p className="text-xl font-medium mb-4">{questions[currentQuestion].question}</p>
          <div className="mb-4">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="block">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
