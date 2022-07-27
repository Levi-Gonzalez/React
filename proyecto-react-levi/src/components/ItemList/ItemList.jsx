import React from 'react'
import { Item } from '../Item/Item'

export 
  const ItemList = ({productos}) => {
      return (

      <div>

        {productos?.map(prod =>(<Item key={prod.id} prod={prod} />)


  
      )}
      </div>
    )}