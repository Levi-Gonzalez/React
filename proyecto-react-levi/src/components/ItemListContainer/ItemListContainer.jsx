import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import { ItemList } from "../ItemList/ItemList";
// import ItemCount from "../itemCount/ItemCount"

  
  const ItemListContainer = () => {
        // ESTADOS:
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState (true)

        const onAdd = (cantidad) => {
        // console.log(`La cantidad es : ${cantidad}`);
  }   
  useEffect (()=>{
    getFetch ()
    .then (respuesta => setProductos (respuesta))
    .catch (err => console.log (err))
    .finally (()=> setLoading(false))
  },[])

    return (
      <div> 
        { loading 
          ? <div className="spinner-border"  role={status}>
            <span class="sr-only"></span>
            </div>

          : <div>
            <ItemList productos={productos} /> 
          </div>
        
        }
      </div>
      )
    } 


export default ItemListContainer