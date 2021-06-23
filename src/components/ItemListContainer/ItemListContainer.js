import React from 'react'
import { ItemListCard } from './itemsListComponents'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = ({greeting, children}) => {
    return(
        <ItemListCard>
            { greeting }
            <a>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5B5F22E0E37CF72BA1D2E1A8778BA6100C4ED9AC22245DFD8C84AE814DC63F8B/scale?width=400&aspectRatio=1.78&format=jpeg" />
            </a>
            <p className="name-card">IRON MAN (3 hrs.)</p>
            <ItemCount stock={5} initial={1}/>
            {children}
        </ItemListCard>
    )
}