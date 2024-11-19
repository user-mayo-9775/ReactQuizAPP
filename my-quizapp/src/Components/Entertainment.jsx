import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';
function EntertainmentQuestions() {
  const [allquestion, setallquestion] = useState([]);
  const [count, setcount] = useState(0);
  const [correct, setcorrect] = useState(true); 
  const [trueanswer, settrueanswer] = useState(0);
  const [falseanswer, setfalseanswer] = useState(0);
  const [loading, setloading] = useState(false)
  const[timer,settimer]=useState(30)
  let catagery="Enertainment";

  const url = 'https://opentdb.com/api.php?amount=10&category=22&type=multiple';

  async function fetchbook() {
      const bookurl = await fetch(url);
      setloading(true)
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
    <div className='geographicloader'>
      <img src="https://i.gifer.com/EmY.gif" />
    </div>
    )
  }
console.log("the load  value is here")
  return (
    <>
  <div className="flex justify-center mt-10">
  <h1 className="text-2xl font-bold text-center mb-6">Geography Quiz</h1>
  <div className="text-center mb-4">
        <span className="text-gray-600">Remaining Questions:  {bookq.length - count}</span>
      </div>
      <div >{timer}</div>
      {bookq.length-count===0  && count===10? <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer} catagery={catagery}/>:"" }
      
      
      {allquestion.length > 0 && count < 10 ? (

        <>
         <div className="text-xl font-semibold mb-4">
            Question {count + 1}
          </div>
        
          <div className="text-lg font-medium mb-6">{bookq[count]}</div>
          <div className='p-3 rounded-lg cursor-pointer border ' onClick={(e) => checkanser(e)}>{incorrect[count][0]}</div>
          <div className='p-3 rounded-lg cursor-pointer border ' onClick={(e) => checkanser(e)}>{incorrect[count][1]}</div>
          <div className='p-3 rounded-lg cursor-pointer border ' onClick={(e) => checkanser(e)}>{correctanswer[count]}</div>
          <div className='p-3 rounded-lg cursor-pointer border ' onClick={(e) => checkanser(e)}>{incorrect[count][2]}</div>

          <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition" onClick={() => nextclick()}>{count === 9 ? "Submit" : "Next"}</button>

          </div>
          <div className="mt-4 text-center">
            <span className="text-green-600 font-bold">Correct: {trueanswer}</span> |{" "}
            <span className="text-red-600 font-bold">Wrong: {falseanswer}</span>
          </div>

        </>
      ) : (""
      )}
      
  </div>
        
        
     

      
 

     
    </>
  );
}

export default EntertainmentQuestions;





