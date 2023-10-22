// LeftComponent.js
import React from 'react';

function LeftComponent({ items, onItemClick }) {
  return (
    <div className="left-component">
      <ul>
        {items.map((trade) => (
          <li key={trade.id} onClick={() => onItemClick(trade)}>
            <p>
              {trade.qty_to_give} {trade.item_to_give} for {trade.qty_to_get} {trade.item_to_get}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftComponent;
