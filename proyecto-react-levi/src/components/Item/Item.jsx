import { memo } from 'react'
import {Link} from 'react-router-dom'


export
const Item = memo (({ prod }) => {
    
    return (

            <div className='containerCard col-xl-3 '>
                            {/* // key={prod.id}                                                            */}
                        <div className="card w-75 mt-4 p-2" >
                            <div className="card-header text-success fw-light">
                                {`${prod.name}`}
                            </div>
                            
                            <div className="card-body">
                                <img src={prod.image} alt='' className='perfumes ' />                                                 
                            </div>  
                                
                            <div className='card-footer text-success'>
                            <div className='fs-5 text'>
                            {`$${prod.price}`}          
                            </div>           
                                {`${prod.category}`}
                            </div>
                        
                            <div className="card-footer p-3"> 
                                    <Link to = {`/detail/${prod.id}`} > 
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


