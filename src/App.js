import React from 'react';
import './materialize.css';
import './App.css';
import Header from './containers/Header/Header.jsx';
import Signup from './containers/Signup/Signup.jsx';
import Login from './containers/Login/Login.jsx';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Signup />
      <Login />
    </React.Fragment>
  );
}

export default App;
