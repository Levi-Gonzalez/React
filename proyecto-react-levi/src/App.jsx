import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react'
import Cart from './components/Cart/Cart'
// import ItemCount from './components/itemCount/ItemCount'

import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



function App() {

  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
        <div className="App"> 
          <NavBar />
           <Routes>
              <Route index  path='/' element = {<ItemListContainer/> } />
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/> } />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
              <Route path='/cart' element= {<Cart/>} />
              <Route path='*' element = {<Navigate to='/' /> } />
           </Routes> 
       </div>
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
