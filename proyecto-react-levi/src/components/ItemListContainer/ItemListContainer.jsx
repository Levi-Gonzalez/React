import { useState, useEffect} from "react";
import { getFetch } from "../../helpers/getFetch";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import ItemCount from "../itemCount/ItemCount"


// (ItLisCon) es el que se encarga de toda la funcionabilidad y la lógica de mostrar estados. (vamos a tener UseEffect, estados, apis)

  const ItemListContainer = () => {
   // ESTADOS:
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState (true)
     // ---------------
     const {categoriaId} = useParams()

    // En el useEffect hacemos la llamada a la API.
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
            <span className="sr-only"></span>
            </div>

          : <div>
            <ItemList productos={productos} /> 
          </div>
        
        }
      </div>
      )
  } 
  
    

export default ItemListContainer