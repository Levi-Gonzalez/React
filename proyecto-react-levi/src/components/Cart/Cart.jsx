import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import {useCartContext} from "../Context/CartContext"

const Cart = () => {
      const [id, setId] = useState ('')

      const [formApp, setFormApp] = useState ({
                name:'',
                email: '',
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
                                  name:'',
                                  email: '',
                                  phone:''
          
            })
            )
      }

      const handleInputChange = (event) => {
        setFormApp({
          ...formApp,
          [event.target.name] : event.target.value 
        })
      }


      const handleSubmit = (event) => {

        if (formApp.email1 != formApp.email2){
          Swal.fire({
            icon: 'error',
            title: 'Ops... Your email does not match',
            text: 'Try again.',
            timer: 6000
          })

        }
        else{  delete formApp.email2
          saveOrder (event, formApp)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Hanks for your purchase !',
            showConfirmButton: false,
            timer: 6000
          })
      
        }
      event.preventDefault ();

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
                    <h3> {prod.name} </h3>
                  </div>
                              
                  <div>
                    <h5> Amount: {prod.amount} </h5>
                  </div>
                              
                  <div>
                    <h5> Price: ${prod.price * prod.amount} </h5>
                  </div> 
                     <button type="button" className="btn-close m-3" aria-label="Close" onClick={ () => deleteProduct (prod.id) }> </button>
                   <div>
                     {id.length > 0 && <h6>  Number order: {prod.id} </h6>}                
                    </div>
              </div>
          ))}
      
      </ul>
        <div className="row g-3 align-items-center">
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
      
      <form className="row g-3 needs-validation p-5" onSubmit={event => {handleSubmit(event)}}>
          <h2>Form</h2>
              <div>
                  <label htmlFor="exampleInputName" className="form-label">Name and Surname</label>
                  <input name="name" type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={handleInputChange} value={formApp.name || ''} required/>
              </div>

              <div className="">
                  <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                  <input name="email1" type="email" className="form-control" id="email1" aria-describedby="emailHelp" onChange={handleInputChange} value={formApp.email1 || ''} required/>
              </div>

              <div>
                <label htmlFor="exampleInputEmail2" className="form-label ">Repeat Email </label>
                <input name="email2" type="email" className="form-control" id="email2" aria-describedby="emailHelp" onChange={handleInputChange} value={formApp.email2 || ''} required/>
              </div>
              
              <div>
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" required/>
              </div>
                
              <div>
                <label htmlFor="exampleInputEmail1" className="form-label ">Cel </label>
                <input name="phone" type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange} value={formApp.phone || ''} required/>
              </div>
                
              <div className="mt-4  form-check">
                  <input type="checkbox" className="mt-3 form-check-input" id="exampleCheck1" required/>
                  <label className=" form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>

              <div className="col-12">
                  <button className="btn btn-primary" type="submit">Submit</button>
              </div>
      </form>
    </div>
  ) 
}

export default Cart


