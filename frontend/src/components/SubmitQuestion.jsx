import React, { useState } from "react";

const SubmitQuestion = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: Date.now(),
      user: "CurrentUser", // Replace with actual user
      text,
      image,
      pdf,
      answers: [],
    };
    onSubmit(newQuestion);
    setText("");
    setImage(null);
    setPdf(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask a question..."
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setPdf(e.target.files[0])}
      />
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default SubmitQuestion;
