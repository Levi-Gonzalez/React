import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom' 
import { useCartContext } from "../Context/CartContext"

const NavBar = () => {
  const {amountTotal} = useCartContext ()
  return (
<div>
  <header>
      <nav className ="navbar  fixed-top">
        <div className ="container-fluid text-white">
            <button className ="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className ="navbar-toggler-icon"></span>
            </button>
              <Link to='/' className="text-white">
               Ecomercce Levi  Gonzalez
              </Link>
              <Link to='/cart' className="">   <CartWidget /> { amountTotal() !== 0 && amountTotal() }   </Link>

              <div className ="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className ="offcanvas-header">
                  <button type="button" className ="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                  <h2 className="fragance">Fragances</h2>

              <div className ="offcanvas-body">
                <ul className ="navbar-nav justify-content-start flex-grow-1 pe-3">                    
                    <div className="navegate">
                    <Link to='/' className="text-dark m-4"> <h4 className="home">Home</h4>  </Link>
                    <Link to='category/Man' className="text-dark m-4"> <h4 className="man">Man</h4> </Link>
                    <Link to='category/Women' className="text-dark m-4"> <h4 className="women">Women</h4></Link>
                    </div>
                </ul>
              </div>
              
            </div>
        </div>
      </nav>
  </header>
</div>
  )
}

export default NavBar