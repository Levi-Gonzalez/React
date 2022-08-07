import {useCartContext} from "../Context/cartContext"

const Cart = () => {
  
  const {cartList, vaciarCarrito} = useCartContext ()

  return (
    <div>     
      <h1>carrito</h1>
    <ul>
      {cartList?.map(item =>(
        <div key={item.id}>
            <div>
                <img src={item.imagen} alt="imagen producto" className='w-50'/>
                nombre: {item.nombre},
                Cantidad: {item.cantidad} {item.precio},
                Precio: {item.cantidad * item.precio}
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