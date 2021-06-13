import React from 'react'
import { ItemList } from './itemsListComponents'

const ItemListContainer = ({greeting, children}) => {
    return(
        <ItemList>
            { greeting }
            { children }
        </ItemList>
    )
}

export { ItemListContainer } 