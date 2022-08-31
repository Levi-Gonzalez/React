
import { useState, useEffect} from "react";  
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { ItemList } from "../ItemList/ItemList";


 const ItemListContainer = ({saludo}) => { 

  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState (true)
  const {categoryId} = useParams()

     
    useEffect (() =>{
        const fireStore = getFirestore ()
        const queryCollection = collection (fireStore, "productos")
        const queryFiltrada = categoryId ? query( queryCollection, where( 'category', '==', categoryId)) :
        query(queryCollection)
        getDocs (queryFiltrada)
        .then(resp => setProducts (resp.docs.map(prod => ({id: prod.id, ...prod.data () }) ) ) )
        .finally(() => setLoading (false))
    }, [categoryId] )
 

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