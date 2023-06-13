import { useContext } from "react"
import { ContextCart } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../cartItem/CartItem";



const Cart = () => {
    const {cart, emptyCart, total, totalQuantity, } = useContext(ContextCart);

    if(totalQuantity === 0){
        return (
        <div>
            <h2> No hay productos en el Carrito</h2>
            <Link to={'/'}> Ver Productos</Link>

        </div>
        )
    }
    
  return (

    <div>
         {cart.map(product => <CartItem key={product.id}  {...product}/>)}
         <h3> Total: ${total}</h3>
         <h3>Cantidad Total{totalQuantity}</h3>
         <button onClick={emptyCart}>Vaciar Carrito</button>
         <Link to='checkout'>Finalizar Compra</Link>


    </div>
    
  )
}

export default Cart