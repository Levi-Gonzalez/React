import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './components/Context/CartContext';
function App() {

// Está aplicación (no solo hablando de "app") si no de todos los elementos, es una SPA = aplicación de una sola página y corre en un servidor o nuestro navegador

  return (
    //BrowsRou: envuelve toda la apliación que nos da el contexto donde voy a poder usar todas las funciones y funcionabilidad del enrutado.
    //CartContextProv: Hace que podamos declarar todos los estados y funciones globales. 
    //Routes:  Envuelve todos los componentes que van a tener una vista individual
    //Route: asocia através del "path" asocias a un componente que nos va a mostrar, ej: ("<ItemListCont/>") con determinada ruta
    //Parametros Dinámicos: son parte de la ruta y se definen despues de los ":" guardando x ej: un "ID" en este caso ":categoriaId" y ":detalleId"
<BrowserRouter> 
    <CartContextProvider> 
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
    </CartContextProvider>
</BrowserRouter>
      
  //DATOS:
     //Las APIS: se construyen en un backend → que está conectado en una base de datos. 
     
     //Al correr nuestra SPA en el naveg. nos conectara a un servicio de Firebase → Firestore nos servira como base de datos que nos servira de BackEnd
     //FireBase: Es una platafomra de servicios para el desarrollo de apps, además es un conjunto de servicios provisto por Google. Se instala como:" npm i firebase "
     )
     //Es como un Back sin hacer trabajo de back, agregando datos,usuarios etc.  Compilación → Firestore Data Base → Crear base de datos → modo prueba → nam (defecto) → habilitar.
    }
    
export default App
