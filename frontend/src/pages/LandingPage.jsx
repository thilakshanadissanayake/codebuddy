import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
  return (
    <div className="container-fluid">
      <header className="bg-dark text-white text-center py-5">
        <h1 className="display-4">Welcome to CodeBuddy</h1>
        <p className="lead">
          Your coding companion for all things development!
        </p>
      </header>

      <section className="text-center my-5">
        <h2 className="h2 mb-4">Get Started with CodeBuddy</h2>
        <p className="lead mb-4">
          Join a community of developers, improve your skills, and collaborate
          on exciting projects!
        </p>
        <button className="btn btn-danger btn-lg">Get Started</button>
      </section>

      <footer className="text-center py-4 bg-light">
        <p className="mb-0">&copy; 2025 CodeBuddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
