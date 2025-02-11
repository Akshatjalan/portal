import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to My App</h1>
      <div className="cards-container">
        <div className="card" onClick={() => navigate("/page-one")}>
          <h2>Go to Page One</h2>
          <p>Click here to explore Page One.</p>
        </div>
        <div className="card" onClick={() => navigate("/page-two")}>
          <h2>Go to Page Two</h2>
          <p>Click here to explore Page Two.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



.home-container {
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card h2 {
  margin-bottom: 10px;
}

.card p {
  color: gray;
}

