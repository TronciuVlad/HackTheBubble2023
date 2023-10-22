import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Simulate fetching items from the backend
    fetch('/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleLoginClick = () => {
    // Implement your login logic here
    // Set the user state upon successful login
  };

  const handleItemClick = (itemId) => {
    // Simulate fetching more information about the selected item
    fetch(`/api/items/${itemId}`)
      .then((response) => response.json())
      .then((data) => setSelectedItem(data));
  };

  return (
    <div className="app">
      <Header user={user} onLoginClick={handleLoginClick} />
      <div className="main-content">
        <LeftComponent items={items} onItemClick={handleItemClick} />
        <RightComponent selectedItem={selectedItem} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
