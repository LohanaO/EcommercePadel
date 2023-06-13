import {useContext} from 'react'
import { ContextCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartItem = ({item, cantidad}) => {
    const {deleteProducts}= useContext(ContextCart);

  return (
    <div>
        <h4>articulo: {item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button onClick={() => deleteProducts(item.id)}>Eliminar Producto</button>


    </div>
  )
}

export default CartItem