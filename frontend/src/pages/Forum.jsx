import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Mock data for demonstration
const initialForumData = {
  questions: [
    {
      id: 1,
      user: "JohnDoe",
      text: "How do I center a div in CSS?",
      image: null,
      pdf: null,
      answers: [
        {
          id: 1,
          user: "JaneDoe",
          text: "You can use `display: flex; justify-content: center; align-items: center;`.",
          image: null,
          pdf: null,
          likes: 10,
          comments: [
            {
              id: 1,
              user: "Alice",
              text: "This worked perfectly!",
            },
          ],
          rating: 4.5,
        },
      ],
    },
  ],
};

const Forum = () => {
  const [forumData, setForumData] = useState(initialForumData);
  const [newQuestion, setNewQuestion] = useState({
    text: "",
    image: null,
    pdf: null,
  });
  const [newAnswer, setNewAnswer] = useState({});
  const [newComment, setNewComment] = useState({});
  const [expandedQuestionId, setExpandedQuestionId] = useState(null); // Track expanded question

  // Handle submitting a new question
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    const question = {
      id: Date.now(),
      user: "CurrentUser", // Replace with actual user
      text: newQuestion.text,
      image: newQuestion.image,
      pdf: newQuestion.pdf,
      answers: [],
    };
    setForumData({
      ...forumData,
      questions: [...forumData.questions, question],
    });
    setNewQuestion({ text: "", image: null, pdf: null });
  };

  // Handle submitting a new answer
  const handleSubmitAnswer = (questionId) => {
    const answer = {
      id: Date.now(),
      user: "CurrentUser", // Replace with actual user
      text: newAnswer[questionId]?.text || "",
      image: newAnswer[questionId]?.image || null,
      pdf: newAnswer[questionId]?.pdf || null,
      likes: 0,
      comments: [],
      rating: 0,
    };
    const updatedQuestions = forumData.questions.map((question) =>
      question.id === questionId
        ? { ...question, answers: [...question.answers, answer] }
        : question
    );
    setForumData({ ...forumData, questions: updatedQuestions });
    setNewAnswer({
      ...newAnswer,
      [questionId]: { text: "", image: null, pdf: null },
    });
  };

  // Handle liking an answer
  const handleLikeAnswer = (questionId, answerId) => {
    const updatedQuestions = forumData.questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            answers: question.answers.map((answer) =>
              answer.id === answerId
                ? { ...answer, likes: answer.likes + 1 }
                : answer
            ),
          }
        : question
    );
    setForumData({ ...forumData, questions: updatedQuestions });
  };

  // Handle adding a comment to an answer
  const handleAddComment = (questionId, answerId) => {
    const comment = {
      id: Date.now(),
      user: "CurrentUser", // Replace with actual user
      text: newComment[answerId] || "",
    };
    const updatedQuestions = forumData.questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            answers: question.answers.map((answer) =>
              answer.id === answerId
                ? { ...answer, comments: [...answer.comments, comment] }
                : answer
            ),
          }
        : question
    );
    setForumData({ ...forumData, questions: updatedQuestions });
    setNewComment({ ...newComment, [answerId]: "" });
  };

  // Toggle expanded question
  const toggleExpandQuestion = (questionId) => {
    setExpandedQuestionId((prevId) =>
      prevId === questionId ? null : questionId
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Discussion Forum</h1>

      {/* Form to submit a new question */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Ask a Question</h5>
          <form onSubmit={handleSubmitQuestion}>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={newQuestion.text}
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, text: e.target.value })
                }
                placeholder="Type your question here..."
                rows="3"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, image: e.target.files[0] })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                accept="application/pdf"
                onChange={(e) =>
                  setNewQuestion({ ...newQuestion, pdf: e.target.files[0] })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Question
            </button>
          </form>
        </div>
      </div>

      {/* Display all questions */}
      <div className="questions-list">
        {forumData.questions.map((question) => (
          <div key={question.id} className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{question.user} asked:</h5>
              <p className="card-text">{question.text}</p>
              {question.image && (
                <img
                  src={URL.createObjectURL(question.image)}
                  alt="Question"
                  className="img-fluid mb-3"
                />
              )}
              {question.pdf && (
                <a
                  href={URL.createObjectURL(question.pdf)}
                  className="btn btn-secondary mb-3"
                >
                  Download PDF
                </a>
              )}

              {/* Expand button to show/hide answers */}
              <button
                className="btn btn-outline-primary mb-3"
                onClick={() => toggleExpandQuestion(question.id)}
              >
                {expandedQuestionId === question.id
                  ? "Hide Answers"
                  : "Show Answers"}
              </button>

              {/* Display answers if the question is expanded */}
              {expandedQuestionId === question.id && (
                <div>
                  {/* Form to submit a new answer */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmitAnswer(question.id);
                    }}
                  >
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        value={newAnswer[question.id]?.text || ""}
                        onChange={(e) =>
                          setNewAnswer({
                            ...newAnswer,
                            [question.id]: {
                              ...newAnswer[question.id],
                              text: e.target.value,
                            },
                          })
                        }
                        placeholder="Write your answer..."
                        rows="3"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) =>
                          setNewAnswer({
                            ...newAnswer,
                            [question.id]: {
                              ...newAnswer[question.id],
                              image: e.target.files[0],
                            },
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        accept="application/pdf"
                        onChange={(e) =>
                          setNewAnswer({
                            ...newAnswer,
                            [question.id]: {
                              ...newAnswer[question.id],
                              pdf: e.target.files[0],
                            },
                          })
                        }
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Submit Answer
                    </button>
                  </form>

                  {/* Display all answers */}
                  <div className="mt-4">
                    {question.answers.map((answer) => (
                      <div key={answer.id} className="card mb-3">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">
                            {answer.user} answered:
                          </h6>
                          <p className="card-text">{answer.text}</p>
                          {answer.image && (
                            <img
                              src={URL.createObjectURL(answer.image)}
                              alt="Answer"
                              className="img-fluid mb-3"
                            />
                          )}
                          {answer.pdf && (
                            <a
                              href={URL.createObjectURL(answer.pdf)}
                              className="btn btn-secondary mb-3"
                            >
                              Download PDF
                            </a>
                          )}
                          <div className="d-flex align-items-center mb-3">
                            <button
                              className="btn btn-outline-primary me-2"
                              onClick={() =>
                                handleLikeAnswer(question.id, answer.id)
                              }
                            >
                              Like ({answer.likes})
                            </button>
                            <input
                              type="text"
                              className="form-control me-2"
                              value={newComment[answer.id] || ""}
                              onChange={(e) =>
                                setNewComment({
                                  ...newComment,
                                  [answer.id]: e.target.value,
                                })
                              }
                              placeholder="Add a comment..."
                            />
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() =>
                                handleAddComment(question.id, answer.id)
                              }
                            >
                              Comment
                            </button>
                          </div>

                          {/* Display all comments */}
                          <div className="comments">
                            {answer.comments.map((comment) => (
                              <div key={comment.id} className="card mb-2">
                                <div className="card-body">
                                  <p className="card-text">
                                    <strong>{comment.user}</strong>:{" "}
                                    {comment.text}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
