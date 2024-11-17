import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';
function CarQuestions() {
  const [allquestion, setallquestion] = useState([]);
  const [count, setcount] = useState(0);
  const [correct, setcorrect] = useState(true); 
  const [trueanswer, settrueanswer] = useState(0);
  const [falseanswer, setfalseanswer] = useState(0);

  const[timer,settimer]=useState(30)
  const [loading, setloading] = useState(false)
  let catagery="Vehical"

  const url = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=medium&type=multiple';
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
    setfalseanswer(falseanswer+ 1);
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
    <div className='carloader'>
      <img src="https://i.gifer.com/VWB.gif" />
    </div>
    )
  }
  return (
    <>
      <div>Questions:</div>
      <div>{timer}</div>
      
      {bookq.length-count===0  && count===10? <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer} catagery={catagery}/>:"" }
      <span>
       RemainingQuestion {bookq.length - count}
      </span>
      
      {allquestion.length > 0 && count < 10 ? (

        <>
          <div>Correct{trueanswer}</div>
          <div>Wrong{falseanswer}</div>
          <div>{bookq[count]}</div>
          <div onClick={(e) => checkanser(e)}>{incorrect[count][0]}</div>
          <div onClick={(e) => checkanser(e)}>{incorrect[count][1]}</div>
          <div onClick={(e) => checkanser(e)}>{correctanswer[count]}</div>
          <div onClick={(e) => checkanser(e)}>{incorrect[count][2]}</div>

          <button onClick={() => nextclick()}>{count === 9 ? "Submit" : "Next"}</button>
        </>
      ) : (""
      )}
      
 

     
    </>
  );
}

export default CarQuestions;
