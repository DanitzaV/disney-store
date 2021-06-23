import React, { useState } from 'react';
import { ItemCountContainer } from './ItemCountStyle'

export const ItemCount = ({stock, initial, onAdd})  => {
  const [clicks, setClicks] = useState(initial);

  const onAddItem = () => {
      if(clicks < stock) {
        let accumulatedClicks = clicks + 1;
        setClicks(accumulatedClicks);
      }
  };

  const onRestItem = () => {
    let accumulatedClicksResta = clicks - 1;
    if (accumulatedClicksResta >= initial) {
      setClicks(accumulatedClicksResta);
    }
  };

  return (
    <ItemCountContainer>
        <div className="btn-actions">
          <button onClick={() => onRestItem()}>-</button>
          <p className="num-items">{clicks}</p>
          <button onClick={() => onAddItem()}>+</button>
        </div>
        <button className="btn-agregar">
          Añadir
        </button>
    </ItemCountContainer>
  ); 
}
