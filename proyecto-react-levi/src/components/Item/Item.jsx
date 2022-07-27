import React from 'react'
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
import ItemListContainer from '../ItemListContainer/ItemListContainer'

>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
export
const Item = ({ prod }) => {
    return (
        <div            
<<<<<<< HEAD
            className='containerCard col-md-6 p-1'
            // key={prod.id}                                                           
=======
            className='row col-xl-7 p-2'
            key={prod.id}                                                           
>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
        >                    
            <div className="card w-100 mt-2" >
                <div className="card-header text-success fw-light">
                    {`${prod.nombre} - ${prod.categoria}`}
                </div>
                <div className="card-body">
<<<<<<< HEAD
                    <img src={prod.imagen} alt='' className=' w-50' />
                                                                         
                </div>                
=======
                    <img src={prod.imagen} alt='' className='imagenes- perfume w-100' />
                                                                         
                </div>
                
>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
                <div className='fs-5 text'>
                {`$${prod.precio}`}          
                </div>           
                
<<<<<<< HEAD
                <div className="card-footer p-3"> 
                        <Link to = {`/detalle/${prod.id}`} > 
                            <button className="btn btn-outline-dark btn-block">
                                Detalle del producto
                            </button>                             
                        </Link>          
=======
                <div className="card-footer"> 
                        <button className="btn btn-outline-dark btn-block">
                            
                            detalle del producto
                        </button> 
>>>>>>> 86cdbfa87ad6ca257ae829ef20d302ff6428b2a2
                </div>
            </div>                                                                                                                            
        </div> 
    )
}

