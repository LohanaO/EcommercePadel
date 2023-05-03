import {useState} from 'react'
import './item.css'

const ItemCount = ({stock, initial,onAdd}) => {
    const [contador, setContador] = useState(initial);

    const aumentarContador= ()=>{
        if(contador< stock){
        setContador(contador + 1)
    }
    }

    const DisminuirContador= ()=>{
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(contador)
        setContador(initial)
    }

  return (
    <div className='contenedor'>
        <div className='card'>
            <button onClick={DisminuirContador}> - </button>
            <span >{contador}</span>
            <button onClick={aumentarContador}> + </button>
        </div>
        <div className='btnagregar'>
            <button onClick={handleOnAdd}>Agregar al carritto</button>
        </div>
        
    </div>
  )
}

export default ItemCount