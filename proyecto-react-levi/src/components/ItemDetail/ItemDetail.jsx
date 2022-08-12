import ItemCount from '../ItemCount/ItemCount'
import { useCartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { useCartContext } from '../Context/CartContext'  //Cada vez que querramos usar CONTEXT, tenemos que importar "useContext" y el "CartContext"
                                      // nos evitamos al invocar la funcion en CartContext, entonces lo que hacemos es llamar a esa función: ✔

const ItemDetail = ({product}) => { //llamamos a a través de prop a "product"
    
    const [isCount, setIsCount] = useState(true)
    const { addCart } = useCartContext () //acá la llamamos ✔ y hacemos destructuring de "addCart" (función que creamos dentro del Provider)
    
      const onAdd = (amoun) => {
        
        addCart ({...product, amount: amoun}) //para que este todo dentro de un mismo campo aplicamos el S.op para que este todo en un mismo campo,
                                                      // lo va a pegar en mi objeto nuevo y amount pasa a ser un campo más ya no van a estar separados en 2 campos
        setIsCount (false)       //tiene que ser false para que setee la vista del componente, entonces cuando deje de ser "true"
                                  // pasa a ser "false" para que nos muestra la vista del componente en este caso el carrito
      }
      

     return (
   
      <div className="row g-0 ">
          <div className="col-p-4 mt-5">
            <h3 >{product.name}</h3>
            <img width="150 px" className=" rounded-start" alt="..." src= {product.image} />
      </div>

         
      <div className="">
            <div className="card-header">
              <p className="card-text">{product.category}</p>
            </div>
      </div>                 
    
      <h5>${product.price}</h5>
            <div>
               {isCount ?            
                  <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
                 :
                 <>
                    <Link to={"/cart"}> <button  className='buttonCart btn btn-danger'>Check Out</button> </Link>  
                    <Link to={"/"}> <button className='buttonCart btn btn-warning' > Continue Buying  </button> </Link>
                    {/* {onAdd} */}
                 </>
              } 
         </div>
        </div>
              
    )
}


export default ItemDetail