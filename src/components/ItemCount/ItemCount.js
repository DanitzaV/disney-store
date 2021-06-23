import React, { useState } from 'react';
import { ItemCountContainer } from './ItemCountStyle'

export const ItemCount = ({stock, initial})  => {
  const [clicks, setClicks] = useState(initial);

  const onAdd = () => {
      if(clicks < stock) {
        let accumulatedClicks = clicks + 1;
        setClicks(accumulatedClicks);
      }
  };

  const onRest = () => {
    let accumulatedClicksResta = clicks - 1;
    if (accumulatedClicksResta >= initial) {
      setClicks(accumulatedClicksResta);
    }
  };

  return (
    <ItemCountContainer>
        <div className="btn-actions">
          <button onClick={() => onRest()}>-</button>
          <p className="num-items">{clicks}</p>
          <button onClick={() => onAdd()}>+</button>
        </div>
        <button className="btn-agregar" onClick={() => setClicks(initial)}>
          Añadir
        </button>
    </ItemCountContainer>
  ); 
}
