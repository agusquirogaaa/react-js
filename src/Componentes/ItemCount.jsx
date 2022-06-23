import React from "react";
import {useState} from "react";
import "./ItemCount.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "./Context/CartContext"


const Contar = ({initial, stock, onAdd}) => {
     
    const [count, setConut] = useState(initial); 

    const handlerAdd = () =>{
        if(count < stock){
            setConut (count + 1)
        }
    }

    const handlerSubtract = () =>{
        if(count > initial){
            setConut (count - 1)
        }
    }
    
    return (
        <>
         <div className="contador">
            <div className="stock">
                <button className="restar btn btn-outline-light" onClick = {handlerSubtract}> - </button>
                 <div className="boton">{count} </div>
                <button className="aumentar btn btn-outline-light" type="button" onClick = {handlerAdd}> + </button>
            </div>
            <button className="agregar btn btn-outline-light " onClick = {()=> onAdd(count)}> Agregar al Carrito </button>
        </div>
        </>
    );
}



export default Contar;