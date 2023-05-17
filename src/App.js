
import ItemDetailContainer from './Componets/ItemDetailsContainer/ItemDetailContainer';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import NavBar from './Componets/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    < >
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCat' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
