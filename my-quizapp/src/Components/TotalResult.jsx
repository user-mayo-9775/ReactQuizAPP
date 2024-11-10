function TotalProgress({ correctAnswers, incorrectAnswers }) {
    return (
      <>
        <div>Quiz Completed!</div>
        <div>Correct Answers: {correctAnswers}</div>
        <div>Incorrect Answers: {incorrectAnswers}</div>
        <div>Skipquestion{10-(correctAnswers+incorrectAnswers)}</div>
      </>
    );
  }
  
  export default TotalProgress;
  