import {useCartContext} from "../Context/CartContext"

const Cart = () => {
  
  const {cartList, vaciarCarrito} = useCartContext ()

  return (
    <div>     
      <h1>carrito</h1>
    <ul>
      {cartList?.map(prod =>( //mostramos el array recorriendolo con el map
        <div key={prod.id}>
              <div>
                  <img src={prod.imagen} alt="imagen prod" className='w-25'/>
                   Nombre: {prod.nombre} -  Cantidad: {prod.cantidad} {prod.precio}  -  Precio: {prod.cantidad * prod.precio}
              </div>
            <button className='btn btn-warning'> X </button>
        </div>
      ))}
    </ul>
        <button onClick={vaciarCarrito}>Delete Cart </button>
    </div>

    )
  }


export default Cart