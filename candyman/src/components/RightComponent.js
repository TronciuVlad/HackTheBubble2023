// RightComponent.js
import React from 'react';

function RightComponent({ selectedItem }) {
  return (
    <div className="right-component">
      {selectedItem ? (
        <div>
          <h2>Trade ID: {selectedItem.id}</h2>
          <p>User ID: {selectedItem.user_id}</p>
          <p>Quantity to Give: {selectedItem.qty_to_give} {selectedItem.item_to_give}</p>
          <p>Quantity to Get: {selectedItem.qty_to_get} {selectedItem.item_to_get}</p>
        </div>
      ) : (
        <p>Select a trade from the left to see more information.</p>
      )}
    </div>
  );
}

export default RightComponent;
