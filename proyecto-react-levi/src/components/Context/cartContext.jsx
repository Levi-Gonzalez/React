import {createContext, useContext, useState } from "react";

    const CartContext = createContext ([])

    export const useCartContext = () => useContext (CartContext)

    const CartContextProvider = ({Children}) => {
        const [cartList, setcartList] = useState ([])
        
        const agregarCarrito= (prod) => {
            const idx = cartList.findIndex(producto => producto.id == prod.id)
            if  (idx !== -1) {
                //cartList[idx].cantidad += prod.cantidad //resumen de una línea de 16 y 17  
               
                let cant = cartList [idx].cantidad
                cartList[idx].cantidad = cant + prod.cantidad
                setcartList ( [...cartList] ) //Copia todo el contenido y lo pega en un nuevo array
            }
            else{

                setcartList([
                    ...cartList, 
                    prod
                ])
            } 
        }
        const vaciarCarrito = () => {
            setcartList ([])
        }

        const precioTotal = () => {
            return cartList.reduce((acumPrecio, prodObj)=> acumPrecio = acumPrecio + (prodObj.precio * prodObj.cantidad))
        }
        const cantidadTotal = () => {
            return cartList.reduce ((contador, produObject)=> contador += produObject.cantidad , 0 )
        }
        const borrarProducto = (id) =>{
            setcartList( cartList.filter (prod => prod.id !== id) )
        }
        return (
            <CartContextProvider value={{
                cartList,
                agregarCarrito,
                vaciarCarrito,
                precioTotal,
                cantidadTotal,
                borrarProducto
            }}>
                {Children}

            </CartContextProvider>
        )

        
    }

export default CartContextProvider