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
<<<<<<< HEAD
    <BrowserRouter>
        <div className="App"> 
          <NavBar />
           <Routes>
              <Route path='/' element = {<ItemListContainer/> } />
              <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
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

=======
    <div className="App"> 
    <NavBar />
    <ItemListContainer saludo={"Mi primer prop en react"} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <p>
        Hola Levi, bienvenido a React!
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
        <a className='linkReact' href="#">React</a>
        <p>Contador de click {count}</p>  
        </button>
        <p>
        </p>
      </div>
    </div>
>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
  )
}

export default App
