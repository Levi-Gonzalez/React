import React from 'react'
import { Item } from '../Item/Item'

export 
// const style = "display:flex"
  const ItemList = ({productos}) => {
      return (

      <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>

        {productos?.map(prod =>(<Item key={prod.id} prod={prod} />)


  
      )}
      </div>
     )}