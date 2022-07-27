// import { useState } from 'react'


// CARD 


// const ItemCount = ({initial=1, stock =10, onAdd}) => {
//   const [count, setCount] = useState (1) ;
   
//   const handleAdd  = () =>{
 
//     if (count < stock)
//     {
//         setCount (count +1)
//     }
//   }

//   const handleRemove = () =>{
//     if (count > 1) 
//     {
//         setCount (count -1)
//     }
//   }
//    const handleAddToCart = () => {
//    onAdd(count) 
//   }

  
//   return (
//     <div className='botones card '>
//         <img className='w-75' src="https://http2.mlstatic.com/D_NQ_NP_766773-MLA45925248250_052021-O.webp" alt="" />
//         <br />
//         <h6>Perfume Paco Rabanne</h6>
//         <label> {count} </label>
//         <button className='btn btn-success'onClick={handleAdd}>+</button>
//         <br />
//         <button className='btn btn-danger' onClick={handleRemove}>-</button>
//         <br />
//         <button className='btn btn-warning'onClick={handleAddToCart}>Agregar al carrito</button>
//     </div>
//   )
// }

// export default ItemCount