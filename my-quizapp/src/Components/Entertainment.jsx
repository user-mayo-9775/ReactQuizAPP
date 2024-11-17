import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';
function EntertainmentQuestions() {
  const [allquestion, setallquestion] = useState([]);
  const [count, setcount] = useState(0);
  const [correct, setcorrect] = useState(true); 
  const [trueanswer, settrueanswer] = useState(0);
  const [falseanswer, setfalseanswer] = useState(0);
  const [loading, setloading] = useState(false)

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
 
  function nextclick(){
    setcorrect(true)
    setcount(count+ 1)
  }
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
  
        
        
      <div>Questions:</div>
      
      {bookq.length-count===0  && count===10? <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer}/>:"" }
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
      return(
        <div className='flex justify-center mt-10'>
          <div className='w-full max-w-lg bg-white rounded-lg shadow-lg p-6'>
            <h1 className='text-2xl font-bold text-center mb-6'>Car Quiz</h1>
            <div className="text-center mb-4">
          <span className="text-gray-600">Remaining Questions: {10 - count}</span>
        </div>
          </div>
        </div>
      );
      

      
 

     
    </>
  );
}

export default EntertainmentQuestions;
