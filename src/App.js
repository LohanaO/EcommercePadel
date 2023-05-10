
import ItemDetailContainer from './Componets/ItemDetailsContainer/ItemDetailContainer';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import NavBar from './Componets/NavBar/NavBar';

function App() {
  return (
    <div >
     <NavBar/>
     <ItemListContainer greeting={'Paletas de Padel'}/>
     <ItemDetailContainer/>
    </div>
  );
}

export default App;
