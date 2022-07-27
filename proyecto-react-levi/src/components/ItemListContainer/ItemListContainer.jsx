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
<<<<<<< HEAD
=======

>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
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

<<<<<<< HEAD
          : <div>
            <ItemList productos={productos} /> 
          </div>
        
        }
=======
          : <h3>Hola, bienvenido a mi tienda!</h3> 
        }
        <ItemList productos={productos} /> 
>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
      </div>
      )
    } 


export default ItemListContainer