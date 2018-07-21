import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home">
    <h1>London travel</h1>
    <div className="wrapper">
      <Link to="/tube">View Tube status</Link>
      <Link to="/carparks">View Car parks occupancy</Link>
      <Link to="/roads">View Road works</Link>
    </div>
  </div>
);

export default Home;