import {createContext, useContext, useState } from "react"; 

    const CartContext = createContext ([])

    export const useCartContext = () => useContext (CartContext) 
    const CartContextProvider = ({children}) => {
        
        const [cartList , setCartList] = useState ([]) 
        
            const addCart = (prod) => {
            const idx = cartList.findIndex(product => product.id === prod.id)
                    if  (idx !== -1) {
                      
               
                       let amoun = cartList [idx].amount
                        cartList[idx].amount = amoun + prod.amount
                        setCartList ( [...cartList] )
                    }
                    else{
                                
                    setCartList([     
                        ...cartList, 

                            prod
                    ])
                    
            }       
        }

        const emptyCart = () => {
            setCartList ([]) 
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
                cartList, 
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