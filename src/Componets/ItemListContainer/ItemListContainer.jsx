import {useState,useEffect} from 'react'
import ItemCount from './ItemCount'
import ItemList from '../ItemList/ItemList'
import { Typography } from '@mui/material'
import { getProductos } from '../../asincmock'




const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta =>setProductos(respuesta))
      .catch(error => console.error(error))
    
  }, []);

  return (
    <div>
    <Typography variant='h3' align='center' fontWeight={'bold'} textTransform={'uppercase'}>{greeting}</Typography>
    {/*<ItemCount initial={1} stock={10}/>*/}
    <ItemList productos={productos}/>
  
    </div>
  )
}

export default ItemListContainer