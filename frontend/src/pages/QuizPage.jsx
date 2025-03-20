import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizdata.js"; // Import the quiz data

function QuizPage() {
  const { quizId } = useParams(); // Get quiz ID from the URL
  const quiz = quizData[quizId]; // Get the quiz by ID
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersStatus, setAnswersStatus] = useState(
    Array(quiz.questions.length).fill(null)
  );
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz.questions.length).fill(null)
  );
  const [showSummaryPopup, setShowSummaryPopup] = useState(false); // State to control popup visibility

  const handleAnswerClick = (answer, questionIndex) => {
    const isCorrect = answer.isCorrect;

    const newAnswersStatus = [...answersStatus];
    newAnswersStatus[questionIndex] = isCorrect ? "correct" : "incorrect";
    setAnswersStatus(newAnswersStatus);

    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed, show summary popup
      setShowSummaryPopup(true);
    }
  };

  // Calculate user performance
  const correctAnswers = answersStatus.filter(
    (status) => status === "correct"
  ).length;
  const incorrectAnswers = answersStatus.filter(
    (status) => status === "incorrect"
  ).length;
  const totalQuestions = quiz.questions.length;

  // Close popup and navigate to home
  const closePopup = () => {
    setShowSummaryPopup(false);
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">{quiz.title}</h1>
      <h2 className="text-center mb-4">{quiz.subtitle}</h2>
      <p>{quiz.description}</p>

      <div className="quiz-container">
        <h3>
          Question {currentQuestionIndex + 1}:{" "}
          {quiz.questions[currentQuestionIndex].question}
        </h3>

        <div>
          {quiz.questions[currentQuestionIndex].answers.map((answer, index) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === answer;
            const isCorrectAnswer = answer.isCorrect;

            return (
              <button
                key={index}
                className={`btn btn-lg w-100 mb-2 ${
                  isSelected
                    ? isCorrectAnswer
                      ? "btn-success"
                      : "btn-danger"
                    : "btn-light"
                }`}
                disabled={answersStatus[currentQuestionIndex] !== null} // Disable once an answer is selected
                onClick={() => handleAnswerClick(answer, currentQuestionIndex)}
              >
                {answer.text}
                {isCorrectAnswer &&
                  answersStatus[currentQuestionIndex] !== null && (
                    <span style={{ marginLeft: "10px", color: "green" }}>
                      ✔
                    </span>
                  )}
              </button>
            );
          })}
        </div>

        {answersStatus[currentQuestionIndex] !== null && (
          <button
            className="btn btn-dark mt-4 w-100"
            onClick={goToNextQuestion}
          >
            {currentQuestionIndex < quiz.questions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        )}
      </div>

      {/* Summary Popup */}
      {showSummaryPopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              maxWidth: "400px",
              textAlign: "center",
              animation: "slideIn 0.5s ease-in-out",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "#333" }}>
              Quiz Summary
            </h2>
            <p style={{ fontSize: "18px", margin: "10px 0" }}>
              Total Questions: {totalQuestions}
            </p>
            <p style={{ fontSize: "18px", margin: "10px 0", color: "green" }}>
              Correct Answers: {correctAnswers}
            </p>
            <p style={{ fontSize: "18px", margin: "10px 0", color: "red" }}>
              Incorrect Answers: {incorrectAnswers}
            </p>
            <p
              style={{ fontSize: "18px", margin: "10px 0", fontWeight: "bold" }}
            >
              Your Score: {((correctAnswers / totalQuestions) * 100).toFixed(2)}
              %
            </p>
            <button
              onClick={closePopup}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "20px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default QuizPage;
