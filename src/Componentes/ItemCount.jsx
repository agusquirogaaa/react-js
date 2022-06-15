import React from "react";
import {useState} from "react";


const Contar = (props) => {
     


    const [contador, setContador] = useState(0)
    

    const sumar = () => {
       setContador (contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }
    
    const Carrito = () => {
        setContador(0)
    }
    

    return (
        <>
         <h2>Bienvenido {props.nombre} ! </h2>
         <div className="boton">El contador es: {contador} </div>
         <div className="boton">
            <button className="aumentar " onClick = {sumar}> Aumentar </button>
            <button className="restar " onClick = {restar}> Restar </button>
            <button className="agregar " onClick = {Carrito}> Agregar al Carrito </button>
        </div>
        </>
    );
}



export default Contar;