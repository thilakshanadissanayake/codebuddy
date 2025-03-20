import React, { useState } from "react";
import Answer from "./Answer";

const Question = ({ question }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="question">
      <h3>{question.user} asked:</h3>
      <p>{question.text}</p>
      {question.image && (
        <img src={URL.createObjectURL(question.image)} alt="Question" />
      )}
      {question.pdf && (
        <a href={URL.createObjectURL(question.pdf)}>Download PDF</a>
      )}
      <button onClick={() => setShowAnswers(!showAnswers)}>
        {showAnswers ? "Hide Answers" : "Show Answers"}
      </button>
      {showAnswers && (
        <div className="answers">
          {question.answers.map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
