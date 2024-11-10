import { useEffect, useState } from 'react';
import TotalProgress from './TotalResult';
function Questions() {
  const [allquestion, setallquestion] = useState([]);
  const [count, setcount] = useState(0);
  const [correct, setcorrect] = useState(null); 
  const [trueanswer, settrueanswer] = useState(0);
  const [falseanswer, setfalseanswer] = useState(0);
  const [answered , setanswered] = useState(false)

  const url = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=medium&type=multiple';

  async function fetchbook() {
    try {
      const bookurl = await fetch(url);
      const data = await bookurl.json();
      console.log("All questions displayed here:", data.results);
      if (data.results) {
        setallquestion(data.results);
      } else {
        console.error("No results found in fetched data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchbook();
  }, []);

  const bookq = allquestion.map((item) => item.question);
  const correctanswer = allquestion.map((correct) => correct.correct_answer);
  const incorrect = allquestion.map((incorrect) => incorrect.incorrect_answers);

  console.log("All incorrect questions are here:", incorrect);
  // function checkanser (e) {
  //       if (answered) return;
  //       const value = e.target.textContent;
  //       const isCorrect = allquestion[count].correct_answer === value;
  //       console.log("You clicked value is here", value);
  //       if (isCorrect) {
  //         settrueanswer((prev) => prev + 1) 
  //       }else{
  //         setfalseanswer((prev) => prev +1)
  //       }
  //       setanswered(true)
  // }
  //   const nextquestion =() => {
  //     setcount((prev) => prev + 1)
  //     setanswered(false)
  //   }

  function checkanser(e) {
    let value = e.target.textContent;
    console.log("You clicked value is here", value);
    let isCorrect = allquestion[count].correct_answer === value;

    if (isCorrect) {
      setcorrect(true);
      settrueanswer((prev) => prev + 1);
    } else {
      setcorrect(false);
      setfalseanswer((prev) => prev + 1);
    }
  }

  return (
    <>
      <div>Questions:</div>
      <span>
        {bookq.length - count}
      </span>

      
      {allquestion.length > 0 && count < 10 ? (

        <>
          <div>Correct{trueanswer}</div>
          <div>Wrong{falseanswer}</div>
          <div>{bookq[count]}</div>
          <div onClick={(e) => checkanser(e)}>{incorrect[count][1]}</div>
          <div onClick={(e) => checkanser(e)}>{incorrect[count][0]}</div>
          <div onClick={(e) => checkanser(e)}>{correctanswer[count]}</div>
          <div onClick={(e) => checkanser(e)}>{incorrect[count][2]}</div>

          <button onClick={() => setcount((prev) => prev + 1)}>{count === 9 ? "Submit" : "Next"}</button>
        </>
      ) : (<div>loadding</div> 
      )}


      <TotalProgress correctAnswers={trueanswer} incorrectAnswers={falseanswer}/>
    </>
  );
}

export default Questions;
