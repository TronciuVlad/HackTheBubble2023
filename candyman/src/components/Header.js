import React, { useState, Fragment } from 'react';
import logo from '../logo.png';

function Header({ user, changeAddListing, onLoginClick }) {
  const [guestEmail, setGuestEmail] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');
  const [isGuestDialogOpen, setGuestDialogOpen] = useState(false);

  const handleGuestClick = () => {
    setGuestDialogOpen(true);
  };

  const handleGuestEmailChange = (event) => {
    setDisplayEmail(event.target.value);
  };

  const handleGuestSubmit = (event) => {
    setGuestEmail(displayEmail);
    setGuestDialogOpen(false);
  };

  return (
    <header>
      <h1 className="header-el">Candyman</h1>
      <img className="header-el" src={logo} alt="Logo"></img>
      {user ? (
        <p className="header-el">Welcome, {user}</p>
      ) : (
        <Fragment>
          {guestEmail ? (
            <div>
              <p className="header-el">Guest: {guestEmail}</p>
              <button className ="header-el" onClick={changeAddListing}>Add listing</button>
            </div>
          ) : (
            <Fragment>
              <button className="header-el" onClick={onLoginClick}>Login</button>
              <button className="header-el" onClick={handleGuestClick}>Guest</button>
            </Fragment>
          )}
          {isGuestDialogOpen && (
            <div className="header-el">
              <input
                className="header-el"
                type="text"
                placeholder="Enter your email"
                value={displayEmail}
                onChange={handleGuestEmailChange}
              />
              <button className="header-el" onClick={handleGuestSubmit}>Submit</button>
              <button className="header-el" onClick={() => setGuestDialogOpen(false)}>Close</button>
            </div>
          )}
        </Fragment>
      )}
    </header>
  );
}

export default Header;

