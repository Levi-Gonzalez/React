import ItemCount from '../ItemCount/ItemCount'
import { useCartContext} from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({product}) => { 
    
    const [isCount, setIsCount] = useState(true)
    const { addCart } = useCartContext () 
    
      const onAdd = (amoun) => {
        
        addCart ({...product, amount: amoun}) 
        setIsCount (false)  
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

                 </>
              } 
         </div>
        </div>
              
    )
}


export default ItemDetail