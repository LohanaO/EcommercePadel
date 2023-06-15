import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container
} from "@mui/material";
import ItemCount from "../ItemListContainer/ItemCount";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContextCart } from "../../Context/CartContext";
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img, description, stock }) => {
  // Estado Addcantidad
  const [addCantidad, setaddCantidad] = useState(0);
  const navigate= useNavigate();

  //useContext
  const {  addProducts } = useContext(ContextCart);
  //Funcion para para manejar la cantidad de productos
  const onAdd = (cantidad) => {
    setaddCantidad(cantidad);
    //creation item and quantity
    const item = { id, nombre, precio, img };
    addProducts(item, cantidad)
  };

  const handleShopping=() => {
      navigate('/');
  }
  return (


   <div className="container p-4">
   <div className="row">

     <div className="col-lg-6">
       <img style={{ maxWidth: '80%' }} src={img} alt={nombre} className="img-fluid img"/>
     </div>
    
     <div className="col-lg-6 p-4">
     
        <h2>{nombre}</h2>
       
        <div className="col-md-10 ">
        <p>{description}</p>
        </div>
        <div >
        <p className="precio">${precio}</p>
        </div>
    
     {addCantidad ? (
           <div className="col-lg-6  ">
           <Link className=" btn d-flex btn-link"  to="/cart"> Terminar Compra </Link>
           <button className=" btn d-flex btn-link"  onClick={handleShopping}> Seguir Comprando </button>
           </div>
           ) : 
             (
             <ItemCount initial={1} stock={stock} onAdd={onAdd} />
             
             )
           }
   </div>
   </div>
   </div>
        
   
  );
};

export default ItemDetail;
