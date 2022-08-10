import {useCartContext} from "../Context/CartContext"

const Cart = () => {
  
  const {cartList, vaciarCarrito, borrarProducto, precioTotal} = useCartContext ()

  return (
    <div>     

       <ul>
           {cartList?.map(prod =>( //mostramos el array recorriendolo con el map
               <div key={prod.id}>
                     <div>
                          <div>
                            <img src={prod.imagen} alt="imagen prod" className='w-50'/> 
                          </div>
                          <div>
                          {prod.nombre}              
                          </div>
                            <div>
                            Cantidad: {prod.cantidad} 
                            </div>
                            <div>
                            Precio: {prod.precio * prod.cantidad}
                              </div> 
                        </div>
               </div>
        ))}
       </ul>
        <button onClick={vaciarCarrito}>Delete Cart </button>
    </div>

    )
  }


export default Cart