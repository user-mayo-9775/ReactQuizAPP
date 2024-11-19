import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';
import quizImage from "../img/Quizbackground2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons'; // Example: Import a specific icon you are using
function GeographyQuestions() {
  const [allquestion, setallquestion] = useState([]);
  const [count, setcount] = useState(0);
  const [correct, setcorrect] = useState(true); 
  const [trueanswer, settrueanswer] = useState(0);
  const [falseanswer, setfalseanswer] = useState(0);
  const[timer,settimer]=useState(30)
  const [loading, setloading] = useState(false)
let catagery="Geography"
  const url = 'https://opentdb.com/api.php?amount=10&category=22&type=multiple';

  async function fetchbook() {
    setloading(true)
      const bookurl = await fetch(url);
      const data = await bookurl.json();
      console.log("All questions displayed here:", data.results);
      if (data.results) {
        setallquestion(data.results);
      } else {
        console.error("No results found in fetched data.");
    setloading(false)
  }
}

  useEffect(() => {
    fetchbook();
  }, []);

  const bookq = allquestion.map((item) => item.question);
  const correctanswer = allquestion.map((correct) => correct.correct_answer);
  const incorrect = allquestion.map((incorrect) => incorrect.incorrect_answers);

  console.log("All incorrect questions are here:", incorrect);

  function checkanser(e) {
    let value = e.target.textContent;
    console.log("You clicked value is here", value);

    
    let isCorrect = allquestion[count].correct_answer === value;
if(correct){
  if (isCorrect) {
    setcorrect(false);
    settrueanswer(trueanswer+ 1);
  } else {
    setcorrect(false);
    setfalseanswer( falseanswer+ 1);
  }
}
}
function nextclick() {
  if (count < 10) {
    setcount(count + 1);
    settimer(30); 
    setcorrect(true);
  }
}

useEffect(() => {
  
  if ( count < 10) {
    var clear = setTimeout(() => {
     
      if (timer > 0) {
        settimer(timer - 1);
      } else {
        setcount(count + 1);
        settimer(30); 
      }
    }, 1000);
  }

 
  if (bookq.length - count === 0) {
    clearTimeout(clear);
    settimer(0); 
  }

  return () =>{ 
    clearTimeout(clear);
  }
  
}, [timer, bookq.length, count]);
  if (loading) {
    return (
    <div className='geographicloader'>
      <img src="https://i.gifer.com/WbOi.gif" />
    </div>
    )
  }
 console.log(loading)
 return (
  <>
  <div id='miancard' className='w-full max-w-lg bg-white rounded-lg shadow-lg p-6' style={{
              backgroundImage: `url(${quizImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
  }}>
    <div id='nav1' >
      <i>Off<FontAwesomeIcon icon="fa-solid fa-power-off" /></i>
    <i>Level:01</i>
    <i>Hints<FontAwesomeIcon icon="fa-solid fa-face-smile-wink" /></i>
    </div>
  <div id='navdown' className='flex justify-between '>    
      {bookq.length-count===0  && count===10? <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer} catagery={catagery}/>:"" }
      <div id='Correct'>icon {trueanswer}</div>
      <span id='RemainingQuestion'>
      <i>Questions: <br /> <span>{bookq.length - count}-10</span></i>
      </span>
      <div id='timer'>00:{timer}</div>
  </div>    
      {allquestion.length > 0 && count < 10 ? (

        <>
        <div id='content2' className='flex justify-between'>
          <div id='options' >
            <label>
            <div className='option' onClick={(e) => checkanser(e)}>
            <input type="radio" name="option" value="1" />{incorrect[count][0]}</div>
            <div className='option' onClick={(e) => checkanser(e)}>
            <input type="radio" name="option" value="1" />{incorrect[count][1]}</div>
            <div className='option' onClick={(e) => checkanser(e)}>
            <input type="radio" name="option" value="1" />{correctanswer[count]}</div>
            <div className='option' onClick={(e) => checkanser(e)}>
            <input type="radio" name="option" value="1" />{incorrect[count][2]}</div>
            </label>
          </div>
            <div id='question'> Questions <br />{bookq[count+1]}</div>
        </div>
        <div id='bottom'>
          <div id='Wrong'>Wrong{falseanswer}</div>
          <button id='button' onClick={() => nextclick()}>{count === 9 ? "Submit" : "Next"}</button>
        </div>
        </>
      ) : (""
      )}

    

  </div>
    </>
);
}

export default GeographyQuestions;
