import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';

function CarQuestions() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(true); 
  const [trueAnswer, setTrueAnswer] = useState(0);
  const [falseAnswer, setFalseAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer

  const url = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=medium&type=multiple';

  async function fetchQuestions() {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      setAllQuestions(data.results);
    } else {
      console.error("No results found in fetched data.");
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const currentQuestion = allQuestions[count];
  const options = currentQuestion ? [...currentQuestion.incorrect_answers, currentQuestion.correct_answer] : [];

  function checkAnswer(selected) {
    setSelectedAnswer(selected);
    const isCorrect = currentQuestion.correct_answer === selected;

    if (correct) {
      setCorrect(false);
      if (isCorrect) {
        setTrueAnswer(trueAnswer + 1);
      } else {
        setFalseAnswer(falseAnswer + 1);
      }
    }
  }

  function nextClick() {
    setCorrect(true);
    setCount(count + 1);
    setSelectedAnswer(null); // Reset selected answer for the next question
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Geography Quiz</h1>

        <div className="text-center mb-4">
          <span className="text-gray-600">Remaining Questions: {10 - count}</span>
        </div>

        {count === 10 ? (
          <TotalProgress correctAnswers={trueAnswer} incorrectAnswers={falseAnswer} />
        ) : (
          <>
            <div className="text-xl font-semibold mb-4">
              Question {count + 1}
            </div>
            <div className="text-lg font-medium mb-6">{currentQuestion?.question}</div>

            <div className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => checkAnswer(option)}
                  className={`p-3 rounded-lg cursor-pointer border 
                    ${selectedAnswer
                      ? option === currentQuestion.correct_answer
                        ? "bg-green-100 border-green-500"
                        : option === selectedAnswer
                        ? "bg-red-100 border-red-500"
                        : "bg-gray-100"
                      : "hover:bg-blue-50"}`
                  }
                >
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="option"
                      checked={selectedAnswer === option}
                      readOnly
                      className="form-radio text-blue-600 h-5 w-5 mr-3"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={nextClick}
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
              >
                {count === 9 ? "Submit" : "Next"}
              </button>
            </div>

            <div className="mt-4 text-center">
              <span className="text-green-600 font-bold">Correct: {trueAnswer}</span> |{" "}
              <span className="text-red-600 font-bold">Wrong: {falseAnswer}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CarQuestions;
