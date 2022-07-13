import React from 'react'
import {Link} from 'react-router-dom';
import "./Footer.css"

const Footer = () => {

    
  return (
    <footer className="footer">
        <div className="footer__contenedor">
            <div className="navegacion">
                <h1> NAVEGACIÓN</h1>
                <div id="barra">
                    <Link to="/" className="barraFooter"> Tienda</Link>
                    <Link to="/contacto" className="barraFooter"> Contacto </Link>
                    <Link to="/nosotros" className="barraFooter"> Nosotros </Link>
                </div>
            </div>
            <div className="newsletter">
                <h1 className="newsletter__titulo">NEWSLETTER</h1>
                <div className="newsletter__boton">
                    <input className="btn btn-outline-light" type="text" placeholder="Email"></input>
                    <button type="reset" className="btn btn-outline-light"> <i className="fa-solid fa-paper-plane icono-footer"></i> </button>
                </div>
            </div>
            <div className="contenedorRedes">
                <div className="contenedor-texto">
                    <i className="fa-solid fa-truck-moving icono-footer"></i>
                    <div>
                        <h1 className="infoTienda"> Enviamos tu compra </h1>
                        <h4 className="infoTienda2"> Entregas a todo el país </h4>
                        
                    </div>
                    <i className="fa-solid fa-grip-lines-vertical icono-footer"></i>
                    <i className="fa-solid fa-credit-card icono-footer"></i>
                    <div>
                        <h1 className="infoTienda"> Pagá como quieras </h1>
                        <h4 className="infoTienda2"> Tarjetas de crédito o efectivo</h4>
                    </div>
                    <i className="fa-solid fa-grip-lines-vertical icono-footer"></i>
                    <i className="fa-solid fa-lock icono-footer"></i>
                    <div>
                        <h1 className="infoTienda"> Comprá con seguridad </h1>
                        <h4 className="infoTienda2"> Tus datos siempre protegidos</h4>
                    </div>
                </div>
                <div className="contenedor-iconos">
                   <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="icono-link"> <i className="fa-brands fa-whatsapp icono-footer"></i> </a>
                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icono-link">  <i className="fa-brands fa-instagram icono-footer"></i> </a>
                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icono-link">  <i className="fa-brands fa-facebook icono-footer"></i> </a>
                </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer
