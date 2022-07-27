import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

export
const Item = ({ prod }) => {
    return (
        <div            
            className='row col-xl-7 p-2'
            key={prod.id}                                                           
        >                    
            <div className="card w-100 mt-2" >
                <div className="card-header text-success fw-light">
                    {`${prod.nombre} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.imagen} alt='' className='imagenes- perfume w-100' />
                                                                         
                </div>
                
                <div className='fs-5 text'>
                {`$${prod.precio}`}          
                </div>           
                
                <div className="card-footer"> 
                        <button className="btn btn-outline-dark btn-block">
                            
                            detalle del producto
                        </button> 
                </div>
            </div>                                                                                                                            
        </div> 
    )
}

