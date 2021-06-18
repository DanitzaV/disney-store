import React from 'react'
import { ItemList } from './itemsListComponents'

export const ItemListContainer = ({greeting, children}) => {
    return(
        <ItemList>
            { greeting }
            { children }
        </ItemList>
    )
}