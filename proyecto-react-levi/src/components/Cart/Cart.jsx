import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import {useCartContext} from "../Context/CartContext"

const Cart = () => {
      const [id, setId] = useState ('')
      const [formApp, setFormApp] = useState ({
                email: '',
                name:'',
                phone:''
      })

      const {cartList, emptyCart, deleteCart, priceTotal} = useCartContext ()
    
      const saveOrder = (e) => {
        e.preventDefault ()
      
        const order = {}
        order.buyer = formApp
      
        order.productos = cartList.map(prod => {
          return {
            product: prod.name,
            id: prod.id,
            price: prod.price
          }
        })
        order.total = priceTotal ()  
        
        const fireStore = getFirestore ()
          const queryOrders = collection (fireStore, 'orders')
          addDoc (queryOrders, order)
          .then (resp => setId(resp.id))
          .finally (()=> setFormApp ({
                                    email:'',
                                    name:'',
                                    phone:''
          
            })
          )
      }

    return (     

      <div>     
        <ul>
            {cartList?.map(prod =>( 
                <div key={prod.id}>
                            <div>
                              <img src={prod.image} alt="image prod" className='w-25'/> 
                            </div>
                            <div>
                            {prod.name}              
                            </div>
                              <div>
                              amount: {prod.amount} 
                              </div>
                              <div>
                              price: {prod.price * prod.amount}
                                </div> 
                      <div>
                        <div className="row">
                        </div>
                          {id.length > 0 && <p>  Number order: {prod.id} </p>}                
                          </div>
                </div>
          ))}
        </ul>
        <p>{priceTotal () !== 0 && `Total Price: $${priceTotal ()}`}</p>
        <div>
          <button className="m-3" onClick={emptyCart}>Delete Cart </button>
        </div>

        <div>
          <button onClick={saveOrder}>Shopping Generator</button>
        </div>

      </div>
    ) 
}

export default Cart