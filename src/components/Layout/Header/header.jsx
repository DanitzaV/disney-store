import React from 'react'
import { Nav, Links, Cart} from './headerComponents'

import logo from '../../../images/logo-disney.png'
import './navbar.css'


const Header = () => {
    return (
        <Nav>
            <Links>
               <img src={logo}/>
               <ul>
               <li>
                   Marvel
               </li>
               <li>
                   Pixar
               </li>
               <li>
                   Disney
               </li>
           </ul>
           </Links>
           
           
           <Cart>
               <p>carrito</p>
           </Cart>
        </Nav>
    )
}

export { Header }