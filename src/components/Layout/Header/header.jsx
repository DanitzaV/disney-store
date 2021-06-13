import React from 'react'
import { Nav, Links, CartWidget} from './headerComponents'
import { HiShoppingCart } from 'react-icons/hi'
import logo from '../../../images/logo-disney.png'



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
           
           
           <CartWidget>
               <HiShoppingCart />
           </CartWidget>
        </Nav>
    )
}

export { Header }