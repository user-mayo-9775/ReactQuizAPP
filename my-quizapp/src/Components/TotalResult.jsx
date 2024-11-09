function TotalProgress({ correctAnswers, incorrectAnswers }) {
    return (
      <>
        <div>Quiz Completed!</div>
        <div>Correct Answers: {correctAnswers}</div>
        <div>Incorrect Answers: {incorrectAnswers}</div>
      </>
    );
  }
  
  export default TotalProgress;
  