import CartWidget from "./CartWidget"
import "./NavBar.css"



function Navbar () {
    return <>
    
        <nav id="navbar">
            <img src={"/assets/lobo.png"} className="lobo" alt="logo"></img>
            <div id="barrita">
                <a href="#1" className="barra"> Tienda </a>
                <a href="#2" className="barra"> Contacto </a>
                <a href="#3" className="barra"> Nosotros </a>
                <CartWidget />
            </div>
            
        </nav>

    



    </>
    
}



export default Navbar