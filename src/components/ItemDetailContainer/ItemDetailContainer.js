import React, { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
        const [peliculas, setPeliculas] = useState("buscando pelis...");
        useEffect(() => {
            const items = [{
                id: '1', 
                title: "IRON MAN", 
                duration: "3 hrs",
                price: 8.000,
                description: "Después de sobrevivir a un ataque inesperado en territorio enemigo, el empresario industrial de vida glamorosa, Tony Stark, construye un traje de alta tecnología y jura proteger al mundo como Iron Man.",
                pictureUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B5F22E0E37CF72BA1D2E1A8778BA6100C4ED9AC22245DFD8C84AE814DC63F8B/scale?width=400&aspectRatio=1.78&format=jpeg",
                año: "2020" },
                {
                    id: '2', 
                    title: "LOKI", 
                    duration: "1 Temporada",
                    price: 12.000,
                    description: "Luego de recoger el teseracto en 'Avengers: Endgame', Loki es llamado a comparecer ante la Autoridad de Variación Temporal (AVT), una organización burocrática kafkiana que existe fuera del tiempo y el espacio.",
                    pictureUrl: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BB9176F5C8CAF15D28E2592293F35C9532F59D9AA4218D4A631A09A77AD950FD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals",
                    año: "2021" ,
                }
            ]
        const getPeliculas = new Promise((resolve, reject) => {
            setTimeout(function(){ 
              resolve(items)
            }, 2000);
          })

          const getItems  = async () => {
            const resultado =  await getPeliculas;
            return resultado
          }
          
          getItems().then((pelis)=> {
            //console.log(peliculas)
            setPeliculas(pelis)
          }, err => {
            console.log("uy uy error")
          }) 
        
      }, []);


    return(
        <>
       
       <p>EL DETALLE DE ITEMS</p>
       <ItemDetail item={peliculas} />
       </>
    )
}