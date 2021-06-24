import React, { useState, useEffect } from 'react'
import { ItemListCard } from './itemsListComponents'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = ({greeting, children}) => {
        const [peliculas, setPeliculas] = useState("buscando pelis...");
        useEffect(() => {
            const items = [{
                id: '1', 
                title: "IRON MAN", 
                duration: "3 hrs",
                price: 8.000,
                pictureUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B5F22E0E37CF72BA1D2E1A8778BA6100C4ED9AC22245DFD8C84AE814DC63F8B/scale?width=400&aspectRatio=1.78&format=jpeg",
                año: "2020" },
                {
                    id: '2', 
                    title: "IRON MAN", 
                    duration: "3 hrs",
                    price: 8.000,
                    pictureUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B5F22E0E37CF72BA1D2E1A8778BA6100C4ED9AC22245DFD8C84AE814DC63F8B/scale?width=400&aspectRatio=1.78&format=jpeg",
                    año: "2020" ,
                }
            ]
        const getPeliculas = new Promise((resolve, reject) => {
            setTimeout(function(){ 
              resolve(items)
            }, 2000);
          })

          getPeliculas.then((pelis)=> {
            //console.log(peliculas)
            setPeliculas(pelis)
          }, err => {
            console.log("uy uy error")
          })
        
      }, []);

    return(
        <ItemListCard>
            <ItemList items={peliculas}/>
            <ItemCount stock={5} initial={1} onAdd/>
            {children}
        </ItemListCard>
    )
}