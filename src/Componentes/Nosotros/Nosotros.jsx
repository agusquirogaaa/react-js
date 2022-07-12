import React from 'react'
import "./Nosotros.css"

const Nosotros = () => {
  return (  
    <>  
  <div className="nosotros">
    <div className="nosotros__texto">
       <h1 className="tituloNosotros"> Nosotros </h1>
       <h4> Somos una empresa encontrada en Almagro, dedicada a la venta de hoodies dentro de capital federal.  </h4>
       <h4> Por el momento solo hacemos venta online, a través de nuestra página web y nuestras redes sociales.</h4>
    </div> 
    <div className="nosotros__politica">  
       <h1 className="tituloNosotros"> Políticas de devolución:</h1>
       <h4> Si no estás conforme con nuestro producto,podes solicitar un reintegro o cambio del mismo de la siguiente forma: </h4>
       <h5 className="textoRedes">- Tenes que comunicarte a nuestro whatsapp para coordinar fecha y hora en la que se va a hacer el cambio en nuestra oficina o a través de la logistica.</h5>
       <h5 className="textoDevoluciones">- Las devoluciones/cambios sólo pueden ser realizadas durante los 7 días siguientes a la compra para evitar que te cobremos el pedido de cambio.</h5>
    </div>
  </div>
    </>
    )
}

export default Nosotros
