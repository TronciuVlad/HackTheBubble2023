// LeftComponent.js
import React from 'react';

function LeftComponent({ items, onItemClick }) {
  return (
    <div className="left-component">
      <ul>
        {items.map((trade) => (
          <li key={trade.id} className="trade-item" onClick={() => onItemClick(trade)}>
              {trade.qty_to_give} {trade.item_to_give} for {trade.qty_to_get} {trade.item_to_get}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftComponent;
