import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'
import { Navbar } from "react-bootstrap"

const NavBar = () => {
  return (
<div>
  <header>
      <nav className ="navbar  fixed-top">
        <div className ="container-fluid text-white">
            <button className ="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className ="navbar-toggler-icon"></span>
            </button>
              <Link to='/ ' className="text-white">
               Ecomercce Levi  Gonzalez
              </Link>
              <Link to='/cart' className="">  <CartWidget />  </Link>

              <div className ="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className ="offcanvas-header">
                  <button type="button" className ="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                  {/* <h4 className="text-dark">Fragances</h4> */}
              <div className ="offcanvas-body">
                <ul className ="navbar-nav justify-content-start flex-grow-1 pe-3">
                  <form className ="d-flex" role="search">
                      <input className ="form-control me-2" type="search" placeholder="Search product" aria-label="Search" />
                      <button className ="btn btn-outline-dark  " type="submit">Search</button>
                    </form> 
                    <Link to='/' className="text-dark m-4"> Home </Link>
                  <Link to='categoria/Man' className="text-dark m-4"> Man </Link>
                  <Link to='categoria/Women' className="text-dark m-4"> Women</Link>
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