import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
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
  )
}

export default App
