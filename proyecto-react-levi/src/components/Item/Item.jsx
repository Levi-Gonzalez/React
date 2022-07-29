import React from 'react'
import {Link} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


export
const Item = ({ prod }) => {
    return (

            <div className='containerCard col-md-3'>
                            {/* // key={prod.id}                                                            */}
                        <div className="card w-75 mt-3 p-2" >
                            <div className="card-header text-success fw-light">
                                {`${prod.nombre}`}
                            </div>
                            
                            <div className="card-body">
                                <img src={prod.imagen} alt='' className='perfumes ' />                                                 
                            </div>  
                                
                            <div className='card-footer text-success'>
                            <div className='fs-5 text'>
                            {`$${prod.precio}`}          
                            </div>           
                                {`${prod.categoria}`}
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

