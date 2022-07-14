import logo from '../../../imagenes/carrito.png'
function CartWidget() {
  return (
    <div className='carrito'>
        {/* <img className='carrito' src="{logo}" alt="" /> */}
        <img className='imagenCarrito' src="./imagenes/carrito.png" alt="carrito" />
    </div>
  )
}

export default CartWidget