const quizdata = [
  {
    title: "General Knowledge Quiz",
    subtitle: "Test your general knowledge!",
    description:
      "This quiz contains 10 questions on general knowledge to test your memory and understanding of various topics.",
    questions: [
      {
        question: "What is the capital of France?",
        answers: [
          { text: "Berlin", isCorrect: false },
          { text: "Madrid", isCorrect: false },
          { text: "Paris", isCorrect: true },
          { text: "Rome", isCorrect: false },
        ],
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
          { text: "Charles Dickens", isCorrect: false },
          { text: "William Shakespeare", isCorrect: true },
          { text: "Jane Austen", isCorrect: false },
          { text: "Mark Twain", isCorrect: false },
        ],
      },
      {
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Earth", isCorrect: false },
          { text: "Jupiter", isCorrect: true },
          { text: "Saturn", isCorrect: false },
          { text: "Neptune", isCorrect: false },
        ],
      },
      {
        question: "What is the boiling point of water?",
        answers: [
          { text: "90°C", isCorrect: false },
          { text: "100°C", isCorrect: true },
          { text: "110°C", isCorrect: false },
          { text: "120°C", isCorrect: false },
        ],
      },
      {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
          { text: "Lion", isCorrect: true },
          { text: "Tiger", isCorrect: false },
          { text: "Elephant", isCorrect: false },
          { text: "Giraffe", isCorrect: false },
        ],
      },
    ],
  },
  {
    title: "Science Quiz",
    subtitle: "Test your science knowledge!",
    description:
      "This quiz contains 10 questions on science, covering various fields like physics, biology, and chemistry.",
    questions: [
      {
        question: "What is the chemical formula for water?",
        answers: [
          { text: "H2O", isCorrect: true },
          { text: "CO2", isCorrect: false },
          { text: "O2", isCorrect: false },
          { text: "NaCl", isCorrect: false },
        ],
      },
      {
        question: "What is the powerhouse of the cell?",
        answers: [
          { text: "Mitochondria", isCorrect: true },
          { text: "Nucleus", isCorrect: false },
          { text: "Ribosome", isCorrect: false },
          { text: "Golgi Apparatus", isCorrect: false },
        ],
      },
      {
        question: "What element does 'O' represent on the periodic table?",
        answers: [
          { text: "Oxygen", isCorrect: true },
          { text: "Osmium", isCorrect: false },
          { text: "Oganesson", isCorrect: false },
          { text: "Ozone", isCorrect: false },
        ],
      },
      {
        question: "What is the chemical formula for methane?",
        answers: [
          { text: "CH4", isCorrect: true },
          { text: "C2H6", isCorrect: false },
          { text: "C3H8", isCorrect: false },
          { text: "CH3OH", isCorrect: false },
        ],
      },
      {
        question: "What is the process of plants making their own food called?",
        answers: [
          { text: "Photosynthesis", isCorrect: true },
          { text: "Respiration", isCorrect: false },
          { text: "Transpiration", isCorrect: false },
          { text: "Evaporation", isCorrect: false },
        ],
      },
    ],
  },
];

export default quizdata;
