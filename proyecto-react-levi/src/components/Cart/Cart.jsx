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

      const {cartList, emptyCart, deleteProduct, priceTotal} = useCartContext ()
    
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
                              <button type="button" className="btn-close m-3" aria-label="Close" onClick={ () => deleteProduct (prod.id) }> </button>
                      <div>
                        <div className="row">
                        </div>
                          {id.length > 0 && <p>  Number order: {prod.id} </p>}                
                          </div>
                </div>
          ))}
        </ul>
        <div class="row g-3 align-items-center">
        <div className="cartbuy">
         <div>
            <button className=" btn btn-dark " onClick={emptyCart}>Delete Cart </button>
          </div>                     
          <div>
            <button className=" btn btn-primary cart" onClick={saveOrder}>Shopping Generator</button>
          </div>
        </div>

          <h5>{priceTotal () !== 0 && `Total Price: $${priceTotal ()}`}</h5>
        
         
      </div>
      <h2 className="form">Form</h2>

    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>


  <div className="col-auto">
    <label for="inputPassword6" className="col-form-label">Password</label>
  </div>

  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>

</div>
    ) 
}

export default Cart