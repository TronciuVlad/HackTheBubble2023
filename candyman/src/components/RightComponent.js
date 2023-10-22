import React from 'react';

function RightComponent({ selectedItem }) {
  return (
    <div className="right-component">
      {selectedItem ? (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>{selectedItem.description}</p>
        </div>
      ) : (
        <p>Select an item from the left to see more information.</p>
      )}
    </div>
  );
}

export default RightComponent;
