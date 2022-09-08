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
   
<BrowserRouter> 
    <CartContextProvider> 
        <div className="App"> 
          <NavBar />
           <Routes> 
              <Route index  path='/' element = {<ItemListContainer/> } />
              <Route path='/category/:categoryId' element={<ItemListContainer/> } />
              <Route path='/detail/:detailId' element={<ItemDetailContainer /> } />
              <Route path='/cart'element ={<Cart/>} />
              <Route path='*' element = {<Navigate to='/' /> } />
           </Routes> 
       </div>
    </CartContextProvider>
</BrowserRouter>
  
)
}
    
export default App
