import React from "react";
import { useState, useEffect } from "react";
import { getProductoId } from "../../asincmock";
import ItemDetail from "../ItemDetail/itemDetail";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    getProductoId(3).then((res) => setProducto(res));
  }, []);

  return(
          <div>
              <h2 style={{textAlign:'center', marginTop:'30px', textTransform:'uppercase'}}>Detalle de produtos</h2>
               <ItemDetail{...producto}/>
          </div>
  )
}

export default ItemDetailContainer;
