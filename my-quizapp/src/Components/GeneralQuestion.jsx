import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';
import quizImage from "../img/Quizbackground2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faClock, faSquareCheck, faSquareXmark, faTrophy } from '@fortawesome/free-solid-svg-icons';

function GeneralQuestions() {
  const [allquestion, setallquestion] = useState([]);
  const [count, setcount] = useState(0);
  const [correct, setcorrect] = useState(true); 
  const [trueanswer, settrueanswer] = useState(0);
  const [falseanswer, setfalseanswer] = useState(0);
  const [loading, setloading] = useState(false)
  const[timer,settimer]=useState(30)
  let catagery="GeneralKnowledge"

  const url = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
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
    settrueanswer(trueanswer + 1);
  } else {
    setcorrect(false);
    setfalseanswer(falseanswer + 1);
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
    <div className='generalloader'>
      <img src="https://i.gifer.com/Fudg.gif"/>
    </div>
    )
  }
  return (
    <>
    {bookq.length - count === 0  ? (
                    <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer} catagery={catagery} />
                ) : ""}


{allquestion.length > 0 && count < 10 ? (
        <div id='miancard' className='w-full max-w-lg bg-white rounded-lg shadow-lg p-6'
            style={{
                backgroundImage: `url(${quizImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
            <div id='nav1'>
                <i className='text-green-500'>
                    <FontAwesomeIcon icon={faSquareCheck} />
                    <span className='text-white text-xl'>{trueanswer}</span>
                </i>
                <i>Car Questions</i>
                <i className='text-yellow-300 text-3xl'>
                    <FontAwesomeIcon icon={faSquareXmark} />
                    <span className='text-white'>{falseanswer}</span>
                </i>
            </div>
            <div id='navdown' className='flex justify-between'>
                <div id='Correct'>
                    <i className='text-yellow-300 text-3xl'><FontAwesomeIcon icon={faTrophy} /></i>
                </div>
                <span id='RemainingQuestion'>
                    <i>Questions: <br /> <span>{bookq.length - count}/10</span></i>
                </span>
                <div id='timer'>
                    00:{timer} <FontAwesomeIcon icon={faClock} />
                </div>
            </div>
           
                <>
                    <div id='content2' className='flex justify-between'>
                        <div id='options'>
                            <label>
                                <div className='option' onClick={(e) => checkanser(e)}>
                                    <input type="radio" name="option" value="1" />{incorrect[count][0]}
                                </div>
                                <div className='option' onClick={(e) => checkanser(e)}>
                                    <input type="radio" name="option" value="1" />{incorrect[count][1]}
                                </div>
                                <div className='option' onClick={(e) => checkanser(e)}>
                                    <input type="radio" name="option" value="1" />{correctanswer[count]}
                                </div>
                                <div className='option' onClick={(e) => checkanser(e)}>
                                    <input type="radio" name="option" value="1" />{incorrect[count][2]}
                                </div>
                            </label>
                        </div>
                        <div id='question'>
                            Questions <br />{bookq[count]}
                        </div>
                    </div>
                    <div id='bottom'>
                        <button id='button' onClick={() => nextclick()}>
                            {count === 9 ? "Submit" : "Next"}
                        </button>
                    </div>
                </>
          
        </div>
          ) : ""}
    </>
);
}

export default GeneralQuestions;
