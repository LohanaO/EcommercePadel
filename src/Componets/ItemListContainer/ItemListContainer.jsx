import {useState,useEffect} from 'react'
import ItemCount from './ItemCount'
import ItemList from '../ItemList/ItemList'
import { Typography } from '@mui/material'
import { getProductos, getProductoCatgoria } from '../../asincmock'
import { useParams } from 'react-router-dom'





const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const {idCat}= useParams();

  useEffect(() => {

  const funcionProductos = idCat ? getProductoCatgoria : getProductos;

  
          funcionProductos(idCat)
      .then(respuesta =>setProductos(respuesta))
      .catch(error => console.error(error))
    
  }, [idCat]);

  return (
    <div>
    <Typography variant='h3' align='center' fontWeight={'bold'} textTransform={'uppercase'}>{greeting}</Typography>
    {/*<ItemCount initial={1} stock={10}/>*/}
    <ItemList productos={productos}/>
  
    </div>
  )
}

export default ItemListContainer