import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
    <h3>{greeting}</h3>
    <ItemCount initial={1} stock={10}/>
    </div>
  )
}

export default ItemListContainer