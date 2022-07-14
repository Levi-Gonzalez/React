const estilos = {width:"30px", }
const NavBar = () => {
  return (
    <div>
<header>
    <ul>
        <div className="logoReact">
        <img style={estilos} src="./src/./logo/react.png" alt="" />
        </div>
        <li><a href="#">Home</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Ubicacion</a></li>
        <li><a href="#">Nosotros</a></li>
    </ul>
</header>
</div>
  )
}

export default NavBar