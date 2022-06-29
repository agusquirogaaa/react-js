import CartWidget from "./CartWidget"
import "./NavBar.css"
import {Link} from "react-router-dom"



function Navbar () {
    return <>
    
        <nav id="navbar">
            <Link to="/" ><img src={"/assets/lobo.png"} className="lobo" alt="logo"></img> </Link>
            <div id="barrita">
                <Link to="/" className="barra"> Tienda</Link>
                <Link to="/contacto" className="barra"> Contacto </Link>
                <Link to="/nosotros" className="barra"> Nosotros </Link>
            </div>
            <div className="iconocarrito"> <CartWidget /> </div>
            
        </nav>

    



    </>
    
}



export default Navbar