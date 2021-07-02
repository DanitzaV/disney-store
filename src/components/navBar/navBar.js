import React from 'react'
import { Nav, Links, CartWidget} from './navBarComponents'
import { HiShoppingCart } from 'react-icons/hi'
import logo from '../../images/logo-disney.png'
import { Link, NavLink } from 'react-router-dom'



export const NavBar = () => {
    return (
        <Nav>
            <Links>
                <NavLink to={`/`}>
                    <img src={logo}/>
                </NavLink>
               <ul>
               <NavLink className="link" activeClassName="link-active" to={`/category/marvel`}>   
               <li>
                   Marvel
               </li>
               </NavLink>
               <NavLink className="link" activeClassName="link-active" to={`/category/pixar`}>   
               <li>
                   Pixar
               </li>
               </NavLink>
               <NavLink className="link" activeClassName="link-active" to={`/category/disney`}>   
               <li>
                   Disney
               </li>
               </NavLink>
           </ul>
           </Links>
           
           
           <CartWidget>
               <HiShoppingCart />
           </CartWidget>
        </Nav>
    )
}
