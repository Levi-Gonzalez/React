import { useState } from 'react'



const ItemCount = ({initial=1, stock =10, onAdd}) => {
  const [count, setCount] = useState (1) ;
   
  const handleAdd  = () =>{
 
    if (count < stock)
    {
        setCount (count +1)
    }
  }

  const handleRemove = () =>{
    if (count > initial) 
    {
        setCount (count -1)
    }
  }
   const handleAddToCart = () => {

   if (count < stock){
        onAdd (count)
   }
  }

  
  return (
    <div className='botones card'>
     
        <label> {count} </label>
        <br />
        <button className='btn btn-success'onClick={handleAdd}> + </button>
        <br />
        <button className='btn btn-danger' onClick={handleRemove}> - </button>
        <br />
        <button className=' btn btn-primary'onClick={handleAddToCart}> Add to cart </button>
      
    </div>
  )
}

export default ItemCount