import { useContext } from "react"
import { ContextCart } from "../../Context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import CartItem from "../cartItem/CartItem";
import { Button, Col, Container, Row } from "react-bootstrap";



const Cart = () => {
    const {cart, emptyCart, total, totalQuantity, } = useContext(ContextCart);
const navigate = useNavigate();
    if(totalQuantity === 0){
        return (
        <div className="container-fluid" style={{minHeight:'calc(100vh - 89px - 88px)'}}>
            <h2 className="alert alert-primary"> No hay productos en el Carrito</h2>
            <Link className="btn btn-link" to={'/'}> Ver Productos</Link>

        </div>
        )
    }
    
    const nextShopping =()=>{
      navigate("/")
    }
  return (

    <Container style={{MinHeight:'calc(100vh - 89px - 88px)'}} className="mt-4" >
    <div className="row">
    <div className=" col-lg-8">
         {cart.map(product => <CartItem key={product.item.id}  {...product}/>)}
         <div>
         <h3> Total: ${total}</h3>
         <h3>Cantidad Total de items: <span style={{color:'green', fontSize:'2rem'}}>{totalQuantity}</span></h3>
         </div>
        </div>
         <Container >
         <Row className="  justify-content-center">
        <Col xs={12} md="auto" className="mb-2">
          <Button className=" btn btn-link bot " onClick={emptyCart}><i class="bi bi-cart-x"></i>  Vaciar Carrito </Button>
        </Col>
        <Col xs={12} md="auto" className="mb-2">
        <Link className=" btn btn-link bot  " to='checkout'><i class="bi bi-bag-check"> </i>  Finalizar Compra </Link>
        </Col>
        <Col xs={12} md="auto" className="mb-2">
          <Button className=" btn btn-link bot " onClick={nextShopping}><i class="bi bi-cart"></i>  Seguir Comprando </Button>
        </Col>
        </Row>
         </Container>
       
   
  </div>

    </Container>
    
  )
}

export default Cart