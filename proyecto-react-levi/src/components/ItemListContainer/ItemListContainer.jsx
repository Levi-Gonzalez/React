import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../itemCount/ItemCount"

  const ItemListContainer = ({saludo}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect(()=>{
      getFetch ()
      .then (respuesta => setProductos (respuesta))
      .catch (err => console.log (err))
      .finally (()=> setLoading(false))
   },[])
    
      const onAdd = (cantidad) => {
        console.log( `La cantidad es: ${cantidad}`);
      }
      console.log(productos);

    return (
      <div>
         {saludo}
            <ItemCount initial={1} stock={12} onAdd={onAdd} />
            {[1,2,3,4].map (num => <li>{num}</li>)}
          <h1>Cargando...</h1>
      </div>
  )
}


export default ItemListContainer