import React from 'react';
import logo from '../logo.png';

function Header({ user, onLoginClick }) {
  return (
    <header>
      <h1 className="header-el">Candyman</h1>
      <img className="header-el" src={logo} alt="Logo"></img>
      {user ? (
        <p className="header-el">Welcome, {user}</p>
      ) : (
        <button className="header-el" onClick={onLoginClick}>Login</button>
      )}
    </header>
  );
}

export default Header;
