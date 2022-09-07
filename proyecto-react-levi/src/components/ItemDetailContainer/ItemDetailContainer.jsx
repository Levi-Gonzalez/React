import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    
  const [product, setProduct] =   useState ({})  
  const [ loading, setLoading ] = useState(true)

  const { detailId } = useParams () 
      useEffect(()=>{
        const fireStore = getFirestore()
        const queryProduct = doc(fireStore, 'productos', detailId)
        getDoc(queryProduct)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ) )
        .finally(() => setLoading (false))
      }, [detailId])   

  return (
    <div>
    {
      loading ? 
      <div className="loader">
      <div className="face">
         <div className="circle"></div>
      </div>
    
      <div className="face">
           <div className="circle"></div>
      </div>
    </div>
      
      : <div className='detail-card'>        
        <div className=' '>
          <ItemDetail product={product}/>             
        </div>
    </div> 
    }
    </div>
    )
}
  
export default ItemDetailContainer