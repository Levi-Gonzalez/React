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
                            <div className="p-4">
                              <img src={prod.image} alt="image prod" className='w-50 m-5 '/> 
                            </div>
                            <div>
                              <h3>
                              {prod.name}    
                              </h3>
                             </div>
                              
                              <div>
                                <h5>
                              Amount: {prod.amount} 
                                </h5>
                              </div>
                              
                              <div>
                                <h5>
                              Price: ${prod.price * prod.amount}
                                </h5>
                              </div> 
                              <button type="button" className="btn-close m-3" aria-label="Close" onClick={ () => deleteProduct (prod.id) }> </button>
                      <div>
                        <div className="row">
                        </div>
                          {id.length > 0 && <h6>  Number order: {prod.id} </h6>}                
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
          <h4 className="totalPrice">{priceTotal () !== 0 && `Total Price: $${priceTotal ()}`}</h4>
      </div>
      
      <form className="row g-3 needs-validation p-5" novalidate>
        <h2>Form</h2>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value="User..." required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="email" className="form-label">Mail</label>
 
  
      <div className="invalid-feedback">
        Please choose a username.
   <label for="exampleInputEmail1" className="form-label ">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

    </div>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>ARG</option>
      <option>BR</option>
      <option>BOL</option>
      <option>COL</option>
      <option>UR</option>
      <option>USA</option>
      <option>FR</option>
      <option>ITA</option>
      <option>ALE</option>
      <option>AUS</option>

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

</div>
    ) 
}

export default Cart



// <label for="exampleInputEmail1" className="form-label ">Email address</label>
// <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
// <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>