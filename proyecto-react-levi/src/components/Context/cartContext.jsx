import { Children, createContext, useState } from "react";

const cartContext = createContext ([])
    
    const cartContextProvider = ({Children}) => {
        const [cartList, setcartList] = useState ([])
        
        const agregarCarrito = (prod) => {
            const idx = cartList.findIndex(producto => producto.id === prod.id)
            if  (idx !== -1) {
                    //cartList[idx].cantidad += prod.cantidad //resumen de una línea de 12 y 13  
                let cant = cartList [idx].cantidad
                cartList[idx].cantidad = cant += prod.cantidad
                setcartList ([... cartList]) //Copia todo el contenido y lo pega en un nuevo array
            }
            else{

                setcartList([
                    ...cartList,
                    prod
                ])
            }
        }
    }