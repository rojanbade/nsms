import React from 'react';
import './login.css';

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submit vayo hai!!');
  }

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <h2 className="title">Login</h2>
      <input type="text" className="inputField" />
      <br />
      <input type="password" className="inputField" />
      <br />

      <button type="submit" className="loginBtn">
        LOGIN
      </button>
    </form>
  );
};

export default Login;
