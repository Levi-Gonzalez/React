import {memo} from 'react'
import { Item } from '../Item/Item'

export 
// const style = "display:flex"
  const ItemList = memo (
    ({products}) => {
      return (

      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>

        {products.map(prod =>(<Item key = {prod.id} prod={prod} />)


  
      )}
      </div>
     )}
      , (oldProps, newProps)=> oldProps.products.length === newProps.products.length )

     