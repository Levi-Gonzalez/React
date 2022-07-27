import React from 'react'
import { Item } from '../Item/Item'

export 
  const ItemList = ({productos}) => {
      return (

      <div>
<<<<<<< HEAD
        {productos?.map(prod =>(<Item key={prod.id} prod={prod} />)
=======
        {productos.map(prod =>(<Item key={productos.id} prod={prod} />)
>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
  
      )}
      </div>
    )}