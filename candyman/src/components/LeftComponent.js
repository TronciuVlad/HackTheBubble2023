import React from 'react';

function LeftComponent({ items, onItemClick }) {
  return (
    <div className="left-component">
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftComponent;
