import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import quizImage from "../img/Quizbackground2.jpg";
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
    <div id="miancard2">
      <div>Quiz Completed!</div>
      <div>Correct Answers: {correctAnswers}</div>
      <div>Incorrect Answers: {incorrectAnswers}</div>
      <div>Skip question: {10 - (correctAnswers + incorrectAnswers)}</div>
      <span><Link to="/">Back to home</Link></span>
    </div>
      {/* Render recent activity for debugging or display */}
   
    </>
  );
}

export default TotalProgress;
