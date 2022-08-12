import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
   // invocamos el array con el product en singular porque va a ser un product.
    const [product, setProduct] =   useState ({})  // iniciamos el "useState" con un objeto
    // para q sea persisente deberiamos llamar ↑ estado "UseSt" guarda los "products" (en este caso). Empieza vacío y luego se dispara el "UseEff" para cargar el prod haciendo un regrender cargando el prod
  
    const { detailId } = useParams () // ← dentro va ul obj {detailId: ''} //USEPARAMS: Es un hook de 'react-router-dom' capturando el parametro, → |
    // | → en este caso "detailId" ej: "1" y con esto logramos la lógica en el useEffect. ↓

    useEffect (() =>{     // El UseEff.  se dispara cuándo se habia hecho el renderizado 
      getFetch (detailId) // dentro del fetch necesitamos colocar el ID.
      //asignamos la respuesta de getfech a "then" y "setProduct"
      .then (resp => setProduct(resp));
    }, []) //  La dependencia, "[]" (que esta vacía) sirve para el montaje y que lo haga una sola vez después del montaje
    

    return (
      <div className='detail-card'>
          <div className=' '>
            <ItemDetail product={product}/>             
          </div>
      </div> 
  )
}
export default ItemDetailContainer