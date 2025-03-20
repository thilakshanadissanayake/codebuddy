// src/data/forumData.js
const forumdata = {
  questions: [
    {
      id: 1,
      user: "JohnDoe",
      text: "How do I center a div in CSS?",
      image: "https://via.placeholder.com/150",
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

export default forumdata;
