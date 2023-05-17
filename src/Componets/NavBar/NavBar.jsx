import React from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
   
  return (
    <header >
    <Link to={"/"} style={{textDecoration:'none'}}>
        <h1>PADEL STORE  <img className='image' src={'../img/imagen.png'} alt='Logo Padel'/></h1>
    </Link>

        <nav>
            <ul>
              <li>
                <NavLink className={'NavLink'} to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink className={'NavLink'} to={`/categoria/indumentaria`}>Indumentaria</NavLink>
              </li>
              <li>
                <NavLink className={'NavLink'} to={`/categoria/paletas`}>Paletas</NavLink>
              </li>
              <li>
                <NavLink className={'NavLink'} to={"/"}>Contacto</NavLink>
              </li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar
