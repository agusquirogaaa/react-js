import React from "react";
import {useState} from "react";
import "./ItemCount.css"
import 'bootstrap/dist/css/bootstrap.min.css';


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
         <div className="contador">
            <div className="stock">
                <button className="restar btn btn-outline-light" onClick = {restar}> - </button>
                 <div className="boton">{contador} </div>
                <button className="aumentar btn btn-outline-light" type="button" onClick = {sumar}> + </button>
            </div>
            <button className="agregar btn btn-outline-light " onClick = {Carrito}> Agregar al Carrito </button>
        </div>
        </>
    );
}



export default Contar;