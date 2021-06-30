import React from 'react'
import { NavBar } from '../../components/navBar/navBar'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../../components/ItemDetailContainer/ItemDetailContainer'

export const Home = () => {
    return(
        <div className="home">
            <NavBar />
            <section>
                <ItemListContainer greeting="Hola Bienvenido">
                <p>Aqui el contenedor de los items</p>
                </ItemListContainer>
                <ItemDetailContainer />
            </section>
        </div>
    )
}

