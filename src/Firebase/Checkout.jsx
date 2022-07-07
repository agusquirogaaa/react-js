import React from 'react'
import { useState} from "react"
import {useCartContext} from "../Context/CartContext"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from'firebase/firestore';
import "./Checkout.css"
   

export default function Checkout() {
    const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext()
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [celular,setCelular] = useState("");

    async function generarOrden() {
        console.log("Quiere comprar", name, email, celular);
        let orden = {}     
        
        orden.buyer = { nombre: name, email: email, celular: celular }
        orden.total = precioTotal()


        if (!name || !email || !celular ) return;
    
        orden.Items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad
            const cantidad = cartItem.cantidad
            return {id, nombre, precio, cantidad}   
        })   
        
        // crear
        const db = getFirestore()
        const queryCollection = collection(db, 'Ordenes')
        addDoc(queryCollection, orden)
        .then(resp => console.log(`${resp.id}`))
        .catch(err => console.log(err))
        .finally(()=> vaciarCarrito())

        // update
        // const queryItem = doc(db, 'items', 'rpioxMaGa8IRMoftfzJU')

        // updateDoc( queryItem, {
        //     stock: 100
        // })
        // .then(() => console.log('terminada'))


        // actualizar el stock
        const queryCollectionStock = collection(db, 'Items')

        const queryActulizarStock = query(
            queryCollectionStock,
            where(documentId(), 'in', cartList.map(it => it.id)) // in es que estén en ..         
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) ))
        .finally(()=> console.log('actualizado'))

        batch.commit()


    } 


  return (
    <>
    <div className="contenedorCheckout">
        <div className="containerCard">
    {cartList.map(product =>   
            <div className="contenedorHijo1" key={product.id} >
                <img src={product.imagenId}  alt="productos" className="imagenCheckout"/> 
                <div className="infoProducto">
                    <div className="infoProducto__texto">    
                        <div><b> {product.nombre} </b></div>   
                        <div><b> Precio: ${product.precio} </b></div>    
                        <div><b> Cantidad: {product.cantidad} {' '} </b></div> 
                    </div>
                    <button className='btn btn-outline-light' onClick={()=> removeItem(product.id)}> X </button> 
                </div>
            </div>
    )}
        </div>
            <div className="contenedorHijo2">   
                <div className="formularioCheckout">
                    <input onChange={(e)=>setName(e.target.value)} className="btn btn-outline-light" placeholder="ingresa su nombre"></input>
                    <input onChange={(e)=>setCelular(e.target.value)} className="btn btn-outline-light" placeholder="ingresa su cel"></input>
                    <input onChange={(e)=>setEmail(e.target.value)} className="btn btn-outline-light" placeholder="ingresa su email"></input>
                </div>

                <h2>El precio total es: ${precioTotal()}</h2>
                <div>
                    <button onClick={vaciarCarrito} className='btn btn-outline-light'>Vaciar carrito</button>
                    <button onClick={generarOrden} className='btn btn-outline-light'>Ralizar compra</button>     
                </div>                                              
            </div>
    </div>
    </>
  )
}
