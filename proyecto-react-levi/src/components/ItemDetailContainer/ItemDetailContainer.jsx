import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  // invocamos el array con el producto en singular porque va a ser un producto.
    const [producto, setProducto] =   useState ({})  // iniciamos el "useState" con un objeto
    // para q sea persisente deberiamos llamar ↑ estado "UseSt" guarda los "productos" (en este caso). Empieza vacío y luego se dispara el "UseEff" para cargar el prod haciendo un regrender cargando el prod
  
    const { detalleId } = useParams () // ← dentro va ul obj {detalleId: ''} //USEPARAMS: Es un hook de 'react-router-dom' capturando el parametro, → |
    // | → en este caso "detalleId" ej: "1" y con esto logramos la lógica en el useEffect. ↓

    useEffect (() =>{     // El UseEff.  se dispara cuándo se habia hecho el renderizado 
      getFetch (detalleId) // dentro del fetch necesitamos colocar el ID.
      //asignamos la respuesta de getfech a "then" y "SetProducto"
      .then (resp => setProducto(resp));
    }, []) //  La dependencia, "[]" (que esta vacía) sirve para el montaje y que lo haga una sola vez después del montaje
    

    return (
      <div className='border border-5 border-primary'>
          <div className='p-4 m-4 w-'>
            <ItemDetail producto={producto}/> 
          </div>
      </div> 
  )
}
export default ItemDetailContainer