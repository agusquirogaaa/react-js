import React from "react";
import ItemList  from "./ItemList";
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import "./ItemListContainer.css" 



  export default function ItemListContainer() {

    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'Items')
      /*const queryCollectionFilter = id ? query(queryCollection, where('stock', '==', id)) : queryCollection*/


      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))

  }, [id])



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
  