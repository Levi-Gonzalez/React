import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../itemCount/ItemCount"
  
// Array de objetos
let productos = [
  {
      id:"1",
      nombre: "212",
      categoria: "perfume",
      precio: 10000,
  },
  {
      id:"2",
      nombre: "Versace",
      categoria: "perfume",
      precio: 15000,
  },
  {
      id:"3",
      nombre: "Play",
      categoria: "perfume",
      precio: 11000,
  }
  ]
  
const getFetch = () => {
      return new Promise ((resolve , reject) =>{
            setTimeout (()=>{
            resolve (productos)
          
          }, 4000)
      })
}

  const ItemListContainer = ({saludo}) => {
    const onAdd = (cantidad) => {
      console.log( `La cantidad es: ${cantidad}`);
    }
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(()=>{
      getFetch ()
      .then (respuesta => setProductos (respuesta))
      .catch (err => console.log (err))
      .finally (()=> setLoading(false))
   },[])
    
      console.log(productos);

    return (
      <div>
         {saludo}
            <ItemCount initial={1} stock={12} onAdd={onAdd} />
            {[1,2,3,4].map( num => <li>{num}</li>)}
          <h1>Cargando...</h1>
      </div>
  )
}


export default ItemListContainer