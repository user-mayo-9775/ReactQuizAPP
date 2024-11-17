import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function TotalProgress({ correctAnswers, incorrectAnswers,catagery }) {
 
  const activity = [
    {catagery,
      correctAnswers,
      incorrectAnswers,
    },
  ];

  useEffect(() => {
   
    localStorage.setItem("recentactivity", JSON.stringify(activity));

   
  }, []); 

  return (
    <>
      <div>Quiz Completed!</div>
      <div>Correct Answers: {correctAnswers}</div>
      <div>Incorrect Answers: {incorrectAnswers}</div>
      <div>Skip question: {10 - (correctAnswers + incorrectAnswers)}</div>
      <Link to="/">Back to home</Link>

      {/* Render recent activity for debugging or display */}
   
    </>
  );
}

export default TotalProgress;
