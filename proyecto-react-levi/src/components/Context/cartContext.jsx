import {createContext, useContext, useState } from "react"; //fijarse que importe todo en una sola línea para que no genere error al subir a un host

    const CartContext = createContext ([])

    export const useCartContext = () => useContext (CartContext) //Esta funcion la creamos para que devuelva el "useContext" 
    //Lo que hace es que invocar a CartContext así podemos pasarlo ya "invocado" como esta acá. Nos devuelve una función ejecutada (CartContext)
    //en vez de hacer 2 importaciones como en "itemDeteail" hacemos 1 línea
    //NO OLVIDAR, EXPORTAR!!

    const CartContextProvider = ({children}) => {
        //acá podemos declarar todos los estados y las funciones globales 
        const [cartList , setCartList] = useState ([]) // cartList es un estado y acá se guardara el listado de mi carrito
        
            const addCart = (prod) => {
            const idx = cartList.findIndex(product => product.id === prod.id)
                    if  (idx !== -1) {
                      //cartList[idx].amount += prod.amount //resumen de una línea de 16 y 17  
               
                       let amoun = cartList [idx].amount
                        cartList[idx].amount = amoun + prod.amount
                        setCartList ( [...cartList] ) //Copia todo el contenido y lo pega en un nuevo array
                    }
                    else{
                                    //CartContextProv le pasa un Reeg Render a setCartList y seteamos un nuevo estado
                    setCartList([     //dispara un seteo. Al ejecutar un estado se renderiza el contextProvider, al renderizar se actualiza el estado que yo tengo ENTONCES : 👀
                        ...cartList, //Creamos un nuevo array y para que mantenga al anterior "producto" con el S. operator. copiamos el interior de la variable: 
                                //const [cartList , setCartList]  (en este caso) y lo pasamos al SetC. y agregamos el "prod" nuevo para que vaya sumando y no se superpongan.
                            prod
                    ])
            } 
        }

        const emptyCart = () => {
            setCartList ([])   // creamos un array vacío para limpiar el carrito
        }

        const priceTotal = () => {
            return cartList.reduce( (acumprice, prodObj) => acumprice = acumprice + (prodObj.price * prodObj.amount) , 0 )
        }
        const amountTotal = () => {
            return cartList.reduce ((count, produObject)=> count += produObject.amount , 0 )
        }
        const deleteProduct = (id) =>{
            setCartList( cartList.filter (prod => prod.id !== id) )
        }
        return (
            <CartContext.Provider value={{
                cartList, //👀 este siempre nos da el  actualizado en tiempo real
                addCart,
                emptyCart, 
                priceTotal,
                amountTotal,
                deleteProduct,
            }}>
                {children}

            </CartContext.Provider>
        )

        
    }

export default CartContextProvider