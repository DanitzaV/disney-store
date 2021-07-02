import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item})  => {

        const addZero = (num) => {
            let number = num.toString();
            let decimal = (number.length < 2) ? `${number}.000` :
            (number.length < 3) ? `${number}.00` :
            `${number}`;
            return decimal;   
        }

  return (
        <div key={item.id}>
            <Link to={`/item/${item.id}`}>
                <img src={item.pictureUrl} />
            </Link>
            <p className="name-card">{item.title } ({item.duration})</p>
            <p>Price: $ {addZero(item.price) }</p>
        </div>
  ); 
}
