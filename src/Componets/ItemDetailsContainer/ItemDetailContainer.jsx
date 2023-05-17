import React from "react";
import { useState, useEffect } from "react";
import { getProductoId } from "../../asincmock";
import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const {itemId} = useParams();
  useEffect(() => {

    getProductoId(itemId).then((res) => setProducto(res));
  }, [itemId]);

  return(
          <div>
              <h2 style={{textAlign:'center', marginTop:'30px', textTransform:'uppercase'}}>Detalle de produtos</h2>
               <ItemDetail{...producto}/>
          </div>
  )
}

export default ItemDetailContainer;
