import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="route home">
      <h1>Welcome to <br />the Apple Store!</h1>
      <Link className="button" to="/select">Start Shopping</Link>
    </div>
  )
}

export default Home;
