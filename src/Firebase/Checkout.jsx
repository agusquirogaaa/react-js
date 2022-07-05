/*import React from 'react'
import { useState, useContext } from "react"
import CartContext from "../Context/CartContext"
import {addDoc,collection,getFirestore} from'firebase/firestore';
   

export default function Checkout() {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [celular,setCelular] = useState("");

    const db=getFirestore();
    const orderCollection=collection(db,"orders");

    const {cart,total} =useContext(CartContext);
    

    function handleClick() {
        console.log("Quiere comprar",name,email,celular);

    const orden = {
            buyer: {name: name, email: email, celular: celular},
            items: cart,
            total,
        };
        console.log(orden)
        
        if (!name || !email || !celular ) return;
        
       

        addDoc(orderCollection, orden).then(({id}) => {
            console.log(id);
        })
    }

  return (
    <>
    <div>
        <h1> Complete el siguiente formulario para finalizar la compra:</h1>
        <input onChange={(e)=>setName(e.target.value)} placeholder="ingresa su nombre"></input>
        <input onChange={(e)=>setCelular(e.target.value)} placeholder="ingresa su cel"></input>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder="ingresa su email"></input>
        <button onClick={handleClick}>FINALIZAR COMPRA</button>                                                         
    </div>
    </>
  )
}
*/