import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import {useCartContext} from "../Context/CartContext"

const Cart = () => {
  
      // Estados:
      const [id, setId] = useState ('')
      const [formApp, setFormApp] = useState ({
                email: '',
                name:'',
                phone:''
      })

      const {cartList, emptyCart, deleteCart, priceTotal} = useCartContext ()
    
      const saveOrder = (e) => {
        e.preventDefault ()
      
       // Orden de compra:
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
        
        // guardar en la base de datos de Fire store:
        const fireStore = getFirestore ()
          const queryOrders = collection (fireStore, 'orders')
          addDoc (queryOrders, order)
          .then (resp => setId(resp.id))
          .catch (err => console.log(err))
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
            {cartList?.map(prod =>( //mostramos el array recorriendolo con el map
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