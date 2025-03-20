import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizList from "./pages/QuizList";
import QuizPage from "./pages/QuizPage";
import Forum from "./pages/Forum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
          <Route path="/quiz" element={<QuizList />} />
          <Route path="/forum" element={<Forum />} />
          {/* <Route path="/physics" element={<Physics />} />
          <Route path="/web-based-systems" element={<WebBasedSystems />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/view-messsages" element={<ViewMessages />} />
          <Route path="/bjj" element={<Bjj />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view-users" element={<ViewUsers />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/grant-access" element={<GrantAccess />} />
          <Route path="/music" element={<Music />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
