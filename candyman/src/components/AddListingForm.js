// AddListingForm.js
import React, { useState } from 'react';

function AddListingForm({ onAddListing }) {
  const [newTrade, setNewTrade] = useState({
    qty_to_give: '',
    item_to_give: '',
    qty_to_get: '',
    item_to_get: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrade({ ...newTrade, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddListing(newTrade);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quantity to Give:
        <input
          type="number"
          name="qty_to_give"
          value={newTrade.qty_to_give}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Item to Give:
        <input
          type="text"
          name="item_to_give"
          value={newTrade.item_to_give}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Quantity to Get:
        <input
          type="number"
          name="qty_to_get"
          value={newTrade.qty_to_get}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Item to Get:
        <input
          type="text"
          name="item_to_get"
          value={newTrade.item_to_get}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default AddListingForm;
