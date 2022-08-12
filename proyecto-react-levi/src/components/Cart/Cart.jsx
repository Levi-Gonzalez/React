import {useCartContext} from "../Context/CartContext"

const Cart = () => {
  
  const {cartList, emptyCart, deleteCart, totalprice} = useCartContext ()

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
        <button onClick={emptyCart}>Delete Cart </button>
    </div>

    )
  }


export default Cart