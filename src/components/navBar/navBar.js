import React from 'react'
import { Nav, Links, CartWidget} from './navBarComponents'
import { HiShoppingCart } from 'react-icons/hi'
import logo from '../../images/logo-disney.png'



export const NavBar = () => {
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
           
           
           <CartWidget>
               <HiShoppingCart />
           </CartWidget>
        </Nav>
    )
}
