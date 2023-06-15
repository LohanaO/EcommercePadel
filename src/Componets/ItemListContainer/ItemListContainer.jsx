import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
//Imports of firebase.
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/Config";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { Cat } = useParams();

  useEffect(() => {
    const myProducts = Cat
      ? query(collection(db, "productos"), where("cat", "==", Cat))
      : collection(db, "productos");
    getDocs(myProducts)
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(newProducts)
      })
      .catch((err) => console.error(err));
  }, [Cat]);

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        fontWeight={"bold"}
        textTransform={"uppercase"}
      >
        {greeting}
      </Typography>
     
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
