import { memo } from 'react'
import {Link} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


export
const Item = memo (({ prod }) => {
    
    return (

            <div className='containerCard col-xl-3 '>
                            {/* // key={prod.id}                                                            */}
                        <div className="card w-75 mt-4 p-2" >
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
                                        <button className="btnBuy btn btn-outline-dark btn-block">
                                            Buy
                                        </button>                             
                                    </Link>          
                            </div>      
                        </div>                                                                                                                            
            </div> 
        )
    }
)


