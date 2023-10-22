import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [trades, setTrades] = useState([]);
  const [selectedTrade, setSelectedTrade] = useState(null);

  useEffect(() => {
    // Fetch the list of trades from your Express.js backend
    fetch('http://localhost:3001/api/trades') // Update with your backend URL
      .then((response) => response.json())
      .then((data) => setTrades(data))
      .catch((error) => console.error('Error fetching trades: ', error));
  }, []);

  const handleLoginClick = () => {
    // Implement your login logic here
    // Set the user state upon successful login
  };

  // const handleItemClick = (itemId) => {
  //   // Simulate fetching more information about the selected item
  //   fetch(`/api/items/${itemId}`)
  //     .then((response) => response.json())
  //     .then((data) => setSelectedItem(data));
  // };

  const handleTradeClick = (trade) => {
    // Implement code to display more information about the selected trade
    setSelectedTrade(trade);
  };

  return (
    <div className="app">
      <Header user={user} onLoginClick={handleLoginClick} />
      <div className="main-content">
        <LeftComponent items={trades} onItemClick={handleTradeClick} />
        <RightComponent selectedItem={selectedTrade} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
