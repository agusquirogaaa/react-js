import React from "react";
import ItemList  from "./ItemList";
import { useEffect, useState } from "react"
import { getFetch } from "../helpers/getFetch";


  export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
   /* const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]); */

    useEffect(() => {
        getFetch()  // fetch llamada a una api
        .then(respuesta=> setProductos(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
    }, [])



  return (
        <>
           <div>
               {loading ? <div> loading...</div>
               : <div> 
                    < ItemList  productos= {productos} />
                </div>}
           </div>
        </>
  )
}
  