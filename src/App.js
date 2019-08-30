import React from 'react';
import './materialize.css';
import './App.css';
import Header from './containers/Header/Header.jsx';
import SignUp from './containers/SignUp/SignUp.jsx';
import Login from './containers/Login/Login.jsx';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SignUp />
      <Login />
    </React.Fragment>
  );
}

export default App;
