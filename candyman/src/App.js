import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import Footer from './components/Footer';
import AddListingForm from './components/AddListingForm';

function App() {
  const [user, setUser] = useState(null);
  const [guestEmail, setGuestEmail] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddingListing, setAddingListing] = useState(false);

  useEffect(() => {
    // Fetch the list of trades from your Express.js backend
    fetch('http://localhost:3001/api/trades')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching trades: ', error));
  }, []);

  const handleLoginClick = () => {
    // Implement your login logic here
    // Set the user state upon successful login
  };

  const changeGuestEmail = (email) => {
    setGuestEmail(email);
  }

  const getGuestEmail = () => {
    return guestEmail;
  }

  const handleItemClick = (item) => {
    // Send a GET request to the server to fetch more information about the selected item
    let itemId = item.id
    fetch(`http://localhost:3001/api/trades/${itemId}`)
      .then((response) => response.json())
      .then((data) => setSelectedItem(data));
  };

  const handleAddListing = (newTrade) => {
    // Add the guestEmail to the user_id field
    newTrade.user_id = guestEmail;
  
    // Send the new trade to the backend for addition
    fetch('http://localhost:3001/api/trades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrade),
    })
      .then(() => {
        setAddingListing(false);
        // Fetch the updated list of trades
        return fetch('http://localhost:3001/api/trades');
      })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error adding trade: ', error));
  };
  

  const changeAddListing = (value) => {
    setAddingListing(true);
  }

  return (
    <div className="app">
      <Header user={user} changeGuestEmail={changeGuestEmail.bind(this)} getGuestEmail={getGuestEmail.bind(this)} changeAddListing={changeAddListing.bind(this)} onLoginClick={handleLoginClick} />
      <div className="main-content">
        {isAddingListing ? (
          <AddListingForm onAddListing={handleAddListing} />
        ) : (
          <Fragment>
            <LeftComponent items={items} onItemClick={handleItemClick} />
            <RightComponent selectedItem={selectedItem} />
          </Fragment>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
