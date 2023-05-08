import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

import './CardWidget.css'

const CardWidget = () => {

  
   
  return (
    <div className='CarroContainer'>
      <i class="bi bi-cart4 carro"></i>
      <div className='numero'>
        <strong>3</strong>
      </div>
    </div>
  )
}

export default CardWidget
