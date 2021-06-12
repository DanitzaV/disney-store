import React from 'react'
import './navbar.css'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="left">
               <p>logo</p>
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
           </div>
           
           
           <div className="left">
               <p>carrito</p>
           </div>
        </nav>
    )
}

export { Header }