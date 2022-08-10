import {memo} from 'react'
import { Item } from '../Item/Item'

export 
// const style = "display:flex"
  const ItemList = memo (
    ({productos}) => {
      return (

      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>

        {productos.map(prod =>(<Item key={prod.id} prod={prod} />)


  
      )}
      </div>
     )}
      , (oldProps, newProps)=> oldProps.productos.length === newProps.productos.length )

     