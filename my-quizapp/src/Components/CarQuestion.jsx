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
      {/* <div>Questions:</div>
      <div></div>
      
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
       */}


{bookq.length-count===0  && count===10? <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer} catagery={catagery}/>:    <div class="bg-gray-900 text-white">
    
    <div class="bg-black text-yellow-400 py-2 flex justify-between items-center px-4 border-b border-yellow-600">
        <button class="text-xl"><i></i> correct:{trueanswer}</button>
        <div class="text-lg font-semibold">Vehical Question: </div>
        <div class="relative">
          
            <i class="fas fa-lightbulb text-xl">incorrect:{falseanswer}</i>
        </div>
    </div>

    
    <div class="grid grid-cols-3 gap-4 border-y border-yellow-600 py-2 text-center text-yellow-400">
        <div class="text-lg flex items-center justify-center">
            <i class="fas fa-trophy text-2xl mr-2"></i> <span>0</span>
        </div>
        <div class="font-semibold text-lg">Questions <br /> {bookq.length - count}-10</div>
        <div class="text-lg flex items-center justify-center">
            <i class="fas fa-clock text-2xl mr-2"></i> <span>{timer}</span>
        </div>
    </div>


    <div class="p-4">
        <div class="bg-black p-4 rounded-lg border border-yellow-600">
            <h2 class="text-lg font-bold mb-4">Question {count+1}:</h2>
            <p class="text-lg">{bookq[count]}</p>
        </div>
    </div>

    {allquestion.length > 0 && count < 10 ? (
    <div class="space-y-4 px-4">
        <div onClick={(e) => checkanser(e)} class="flex items-center justify-between bg-black p-4 rounded-lg border border-yellow-600">
            <span class="font-semibold">A</span>
              <span >{incorrect[count][0]}</span>
        </div>
        <div onClick={(e) => checkanser(e)} class="flex items-center justify-between bg-black p-4 rounded-lg border border-yellow-600">
            <span class="font-semibold">B</span>
            <span >{incorrect[count][1]}</span>
        </div>
        <div  onClick={(e) => checkanser(e)}class="flex items-center justify-between bg-black p-4 rounded-lg border border-yellow-600">
            <span class="font-semibold">C</span>
            <span >{correctanswer[count]}</span>
        </div>
        <div onClick={(e) => checkanser(e)} class="flex items-center justify-between bg-black p-4 rounded-lg border border-yellow-600">
            <span class="font-semibold">D</span>
            <span >{incorrect[count][2]}</span>
        </div>
        <button onClick={() => nextclick()}>{count === 9 ? "Submit" : "Next"}</button>
    </div>
      ) : (""
      )}
  
</div>}

  



 

     
    </>
  );
}

export default CarQuestions;
