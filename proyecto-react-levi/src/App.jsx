import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './components/Context/CartContext';

function App() {

  return (
    //BrowsRou: envuelve toda la apliación que nos da el contexto donde voy a poder usar todas las funciones y funcionabilidad del enrutado.
    //Routes:  Envuelve todos los componentes que van a tener una vista individual
    //Route: asocia através del "path" asocias a un componente que nos va a mostrar, ej: ("<ItemListCont/>") con determinada ruta
    //Parametros Dinámicos: son parte de la ruta y se definen despues de los ":" guardando x ej: un "ID" en este caso ":categoriaId" y ":detalleId"
<BrowserRouter> 
  {/* <CartContextProvider> */}
        <div className="App"> 
          <NavBar />
           <Routes> 
              <Route index  path='/' element = {<ItemListContainer/> } />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/> } />
              <Route path='*' element = {<Navigate to='/' /> } />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
              <Route path='/cart'element ={<Cart/>} />
           </Routes> 
       </div>
  {/* </CartContextProvider> */}
</BrowserRouter>
      
      
      // <div>
      //   <a href="https://vitejs.dev" target="_blank">
      //     * <img src="/vite.svg" className="logo" alt="Vite logo" /> */
      //   </a>
      //   <a href="https://reactjs.org" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      // </div>

  )
}

export default App
