import { useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => { //llamamos a a través de prop a "producto"
  const [toCart, setToCart] = useState(true) //

    const onAdd = (cant) => {
        console.log(`La cantidad es:  ${cant}`)
        setToCart (false) //tiene que ser false para que setee la vista del componente, entonces cuando deje de ser "true"
        // pasa a ser "false" para que nos muestra la vista del componente en este caso el carrito
        //
    }

    return (
   
        <div className="row g-0">
          <div className="col-p-4">
              <h3 >{producto.nombre}</h3>
            <img width="150 px" className=" rounded-start" alt="..." src= {producto.imagen} />
          </div>
          <div className="">
            <div className="card-header">
              <p className="card-text">{producto.categoria}</p>
            </div>
            <div>
                <h5>${producto.precio}</h5>
            <div>
          {toCart?            
            <ItemCount initial={1} stock={12} onAdd={onAdd}/> 
            :
            <Link to={"/cart"}> <button>Ir al carrito</button> </Link>
            } 
           </div>
            </div>                       
          </div>
        </div>
        //{onAdd} → función
    )
}

export default ItemDetail
