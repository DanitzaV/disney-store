import React, { useState, useEffect } from 'react';

export const ItemList = ({items})  => {
    const [peliculas, setPeliculas] = useState("buscando pelis...");

    useEffect(() => {
        const getPeliculas = new Promise((resolve, reject) => {
            setTimeout(function(){ 
              resolve(items)
            }, 2000);
          })

          getPeliculas.then((peliculas)=> {
            //console.log(peliculas)
            setPeliculas(peliculas)
          }, err => {
            console.log("uy uy error")
          })
        
      }, []);

      const addZero = (num) => {
        let number = num.toString();
        let decimal = (number.length < 2) ? `${number}.000` :
        (number.length < 3) ? `${number}.00` :
        `${number}`;
        return decimal;   
      }

  return (
    <>
    {

       typeof peliculas !== "string" ? (
        peliculas.map((e) =>  (
           <div key={e.id}>
                 <a>
                 <img src={e.pictureUrl} />
                </a>
                <p className="name-card">{e.title } {(e.duration)}</p>
                <p>Price: $ {addZero(e.price) }</p>
            </div>
        ))
        ) : <p>{peliculas}</p>
    }
       
    </>
  ); 
}
