import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemCount from "../ItemListContainer/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { ContextCart } from "../../Context/CartContext";

const ItemDetail = ({ id, nombre, precio, img, description, stock }) => {
  // Estado Addcantidad
  const [addCantidad, setaddCantidad] = useState(0);

  //useContext
  const {  addProducts } = useContext(ContextCart);
  //Funcion para para manejar la cantidad de productos
  const onAdd = (cantidad) => {
    setaddCantidad(cantidad);
    //creation item and quantity
    const item = { id, nombre, precio };
    addProducts(item, cantidad)
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Card sx={{ width: 800 }}>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="300"
          image={img}
          alt={nombre}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            align="center"
            fontWeight={"bold"}
            component="div"
          >
            {nombre}
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            align="center"
            fontWeight={"bold"}
            component="div"
          >
            ${precio}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          {addCantidad ? (
          <Link to="/cart"> Terminar Compra </Link>
          ) : 
            (<ItemCount initial={1} stock={stock} onAdd={onAdd} />)
          }
        </CardContent>
      </Card>
      );
    </div>
  );
};

export default ItemDetail;
