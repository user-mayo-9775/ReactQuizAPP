import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import quizImage from "../img/Quizbackground2.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCar } from '@fortawesome/free-solid-svg-icons'; // Example: Import a specific icon you are using

function TotalProgress({ correctAnswers, incorrectAnswers,catagery }) {
 
  const activity = [
    {catagery,
      correctAnswers,
      incorrectAnswers,
    },
  ];


   
  localStorage.setItem("recentactivity", JSON.stringify(activity));
    

   
 
  return (
    <>
    <div id="miancard2">
      <div>Quiz Completed!</div>
      <div>Correct Answers: {correctAnswers}</div>
      <div>Incorrect Answers: {incorrectAnswers}</div>
      <div>Skip question: {10 - (correctAnswers + incorrectAnswers)}</div>

      <Link to="/">Back to home</Link>

    </div>


   
    </>
  );
}

export default TotalProgress;
