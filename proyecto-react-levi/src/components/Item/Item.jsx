import React from 'react'
import {Link} from 'react-router-dom'
export
const Item = ({ prod }) => {
    return (
        <div            
            className='containerCard col-md-6 p-1'
            // key={prod.id}                                                           
        >                    
            <div className="card w-100 mt-2" >
                <div className="card-header text-success fw-light">
                    {`${prod.nombre} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.imagen} alt='' className=' w-50' />
                                                                         
                </div>                
                <div className='fs-5 text'>
                {`$${prod.precio}`}          
                </div>           
                
                <div className="card-footer p-3"> 
                        <Link to = {`/detalle/${prod.id}`} > 
                            <button className="btn btn-outline-dark btn-block">
                                Detalle del producto
                            </button>                             
                        </Link>          
                </div>
            </div>                                                                                                                            
        </div> 
    )
}

