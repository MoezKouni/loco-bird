import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Loco Bird!</h1>
      <Link to="/login">LOGIN</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
