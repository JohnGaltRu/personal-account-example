import React from 'react';
import './HomePage.css';
import Header from './Header/Header.jsx';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login.jsx';

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Signup />
      <Login />
    </React.Fragment>
  );
}

export default HomePage;
