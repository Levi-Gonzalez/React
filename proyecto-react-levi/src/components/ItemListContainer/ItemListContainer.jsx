import { useState, useEffect} from "react";
import { getFetch } from "../../helpers/getFetch";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import ItemCount from "../itemCount/ItemCount"
 
  
  const ItemListContainer = () => {
   // ESTADOS:
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState (true)
     // ---------------
     const {categoriaId} = useParams()

     useEffect (()=>{
      if (categoriaId) {
         getFetch ()
         .then (respuesta => setProductos (respuesta.filter(prod => prod.categoria === categoriaId)))
         .catch (err => console.log (err))
         .finally (()=> setLoading(false))
       }                   
       else {
        getFetch ()
        .then (respuesta => setProductos (respuesta))
        .catch (err => console.log (err))
        .finally (()=> setLoading(false))
      }
      },[categoriaId])
      
      const onAdd = (cantidad) => {
        console.log(`La cantidad es : ${cantidad}`);
      }
      
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