import React, { useState } from "react";

const QuizScreen = () => {
  const question = [
    {
      question: "HTML stands for __________",
      options: [
        "Hypertext markup langauge",
        "Programming langauge",
        "hyper test markup language",
        "HTML language",
      ],
      correctAns: "Hypertext markup langauge",
    },

    {
      question: "CSS stands for __________",
      options: [
        "Cascading Style sheet",
        "Programming langauge",
        "Candy language",
        "Cascading language"
      ],
      correctAns: "Cascading Style sheet",
    },

    {
      question: "JS stands for __________",
      options: [
        "Javascroll",
        "javascript",
        "java",
        "java lnaguage",
      ],
      correctAns: "javascript",
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (selectedOption: any) => {
    if (selectedOption === question[currentIndex].correctAns) {
      setScore(score + 1);
    }
    
    if (currentIndex + 1 < question.length) {
      setcurrentIndex(currentIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const percentageScore = (score / question.length) * 100;
  const passingScore = 50;
  const hasPassed = percentageScore >= passingScore;

  return (
    <>
      <div className="p-4 fs-1 bg-warning-subtle">
        <div className="container">
          {!quizFinished ? (
            <>
              <div className="p-3 rounded bg-info mb-3 text-center">
                <p>
                  Question {currentIndex + 1}/{question.length}
                </p>

                <h4>{question[currentIndex].question}</h4>
              </div>

              <div className="row">

                {question[currentIndex].options.map((x, i) => (

                  <div key={i} className="col-md-3 p-3">

                    <button
                      onClick={() => handleAnswerClick(x)}
                      className="btn btn-secondary"
                    >
                      {x}
                    </button>

                  </div>
                ))}

              </div>
            </>

          ) : (
            <div className="text-center bg-warning-subtle p-2 rounded ">

              <h2 className="fs-1 text-info">Quiz is Finished!</h2>

              <p className="fw-bolder fs-4 text-secondary">Score: {score} / {question.length}</p>

              <p className="fw-bolder fs-5 text-success">Percentage: {percentageScore.toFixed(2)}%</p>

              {percentageScore === 100 && <p>Congratulations! You got a perfect score!</p>}

              <p className="fw-bolder fs-3">{hasPassed ? "You are Passed!" : "You are Failed"}</p>

            </div>
          )}

        </div>
      </div>
    </>

  );
};

export default QuizScreen;
