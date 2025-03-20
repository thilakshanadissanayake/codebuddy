// QuizList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quizData from "../data/quizdata.js"; // Import the quiz data

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes(quizData); // Set quizzes from JSON data
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Available Quizzes</h1>
      <div className="list-group">
        {quizzes.map((quiz, index) => (
          <Link
            key={index}
            to={`/quiz/${index}`}
            className="list-group-item list-group-item-action"
          >
            {quiz.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuizList;
