import { addDoc, collection, getFirestore } from "firebase/firestore"
import {useCartContext} from "../Context/CartContext"

const Cart = () => {
  
  const {cartList, emptyCart, deleteCart, priceTotal} = useCartContext ()

  // Orden de compra:
const saveOrder = async (e) => {
  e.preventDefault ()

  const order = {}
   order.buy = { email: 'example@gmail.com',
                 name:'usuario',
                 phone:'123456789'}


  order.productos = cartList.map(prod => {
    return {
      product: prod.name,
      id: prod.id,
      price: prod.price
    }
  })
  order.total = priceTotal ()
  console.log(order);
  
  
  const fireStore = getFirestore ()
  const queryOrders = collection (fireStore, 'orders')
  addDoc (queryOrders, order)
  .then (resp => setId(resp.id))

  return (

    <div>     

       <ul>
           {cartList?.map(prod =>( //mostramos el array recorriendolo con el map
               <div key={prod.id}>
                     <div>
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
                        </div>
               </div>
        ))}
       </ul>
       <h6>{priceTotal () !== 0 && `Total Price: $${priceTotal ()}`}</h6>
       <div>
        <button className="m-3" onClick={emptyCart}>Delete Cart </button>
       </div>

       <div>
        <button onSubmit={saveOrder} >Shopping Generator</button>
       </div>

    </div>

    )
  }
}


export default Cart