import React from 'react'
import { NavBar } from '../../components/navBar/navBar'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'



export const Home = () => {
    return(
        <div className="home">
            <NavBar />
            <section>
                <ItemListContainer greeting="Hola Bienvenido">
                <p>Aqui el contenedor de los items</p>
                </ItemListContainer>
            </section>
        </div>
    )
}

