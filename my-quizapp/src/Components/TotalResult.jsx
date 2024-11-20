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


<div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
 
  <div class="bg-yellow-500 text-white font-bold text-lg flex items-center justify-center py-4 relative">
    <span>Quiz Completed</span>
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 w-6 h-6 rounded-l-full"></div>
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 w-6 h-6 rounded-r-full"></div>
  </div>

 
  <div class="bg-black text-white py-6 px-4 text-center">
    <div class="flex justify-around mb-4">
      <div class="text-center">
        <div class="text-xl font-bold">{correctAnswers}</div>
        <div class="text-sm text-green-400">Correct Answers</div>
      </div>
      <div class="text-center">
        <div class="text-xl font-bold text-red-400">{incorrectAnswers}</div>
        <div class="text-sm">Wrong Answers</div>
      </div>
    </div>
    <div class="text-xl font-bold mb-4"> Your Score :{correctAnswers*10}</div>
    
  </div>

  
  <div class="bg-white py-4 flex justify-around items-center">
    <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
      
      <span class="text-lg">Skip Question{10 - (correctAnswers + incorrectAnswers)}</span>
    </button>
    <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
      
      <span class="text-lg">Attempt Question{correctAnswers + incorrectAnswers}</span>
    </button>
  </div>

 
  <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-center py-2 font-bold rounded-b-lg">
  <Link to="/">Back to home</Link>

  </div>
</div>   
    </>
  );
}

export default TotalProgress;
