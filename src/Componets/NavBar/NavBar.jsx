import React from 'react'
import './NavBar.css'
import imagen from '../../imagen.png'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
   
  return (
    <header >
        <h1>PADEL STORE  <img className='image' src={imagen} alt='Logo Padel'/></h1>
       

        <nav className=''>
            <ul>
                <li>Home</li>
                <li>¿Quienes somos?</li>
                <li>Indumentaria</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar