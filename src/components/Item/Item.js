import React from 'react';

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
            <a>
                <img src={item.pictureUrl} />
            </a>
            <p className="name-card">{item.title } ({item.duration})</p>
            <p>Price: $ {addZero(item.price) }</p>
        </div>
  ); 
}
