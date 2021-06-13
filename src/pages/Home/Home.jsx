import React from 'react'
import { Layout } from '../../components/Layout'
import { ItemListContainer } from '../../components/Layout/ItemListContainer/ItemListContainer'



const Home = () => {
    return(
        <Layout title="Resultado: ">
            <ItemListContainer greeting="hi">
                <p>Aqui el contenedor de los items</p>
            </ItemListContainer>
        </Layout>
    )
}

export { Home } 