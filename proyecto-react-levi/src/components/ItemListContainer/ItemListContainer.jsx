// DATO : si tengo doble importación puede generar ruptura, entonces tengo que concatenar/doble importación (useEff y UseState.)
import { useState, useEffect} from "react";  //El UseEff: dispara las acciones o todo lo que tiene adentro.
import { useParams } from "react-router-dom";
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { getFetch } from "../../helpers/getFetch";
import { ItemList } from "../ItemList/ItemList";


// (ItLisCon) es el que se encarga de toda la funcionabilidad y la lógica de mostrar estados. (vamos a tener UseEffect, estados, apis)

  const ItemListContainer = ({saludo}) => { //ItListC: es un componente a su vez llama a su padre que es "app" (tiene que coincidir con su ruta) 
    //SI coincide la ruta se dispara la función de mi componente
   // ESTADOS:
   const [products, setProducts] = useState({})
   const [loading, setLoading] = useState (true)
     // ---------------
     const {categoryId} = useParams()

      // useEffect (()=>{
      //     const fireStore = getFirestore ()
      //     const queryProduct = doc (fireStore, 'productos', '4JvTNBlscq6ZuMtrOu22')
      //     getDoc(queryProduct)
      //       .then(resp =>  setProducts ({id: resp.id, ...resp.data()}));

      // },[]) 

      
      useEffect (() =>{
        const fireStore = getFirestore ()
        const queryCollection = collection (fireStore, "productos")
        getDocs (queryCollection)
        .then(resp => setProducts (resp.docs.map(prod => ({id: prod.id, ...prod.data () }) ) ) )
        .catch (err => console.log(err)) 
        .finally(() => setLoading (false))
      }, [] )

      
      
    // En el useEffect hacemos la llamada a la API.
     useEffect (()=>{
      if (categoryId) {
         getFetch ()
         .then (Response => setProducts (Response.filter(prod => prod.category === categoryId)))
         .catch (err => console.log (err))
         .finally (()=> setLoading(false))
       }                   
       else {
        getFetch ()
        .then (Response => setProducts (Response))
        .catch (err => console.log (err))
        .finally (()=> setLoading(false))
      }
      },[categoryId])
      
      
    return (
      <div> 
        { loading 
          ?
          <div className="loader">
          <div className="face">
              <div className="circle"></div>
          </div>
          <div className="face">
              <div className="circle"></div>
          </div>
          </div>

          : <div>
            <ItemList products={products} /> 
          </div>
        
        }
      </div>
      )
    }
    

export default ItemListContainer