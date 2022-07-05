import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../Componentes/ItemDetail';
import {getFirestore, doc, getDoc} from "firebase/firestore";
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'Items', detalleId )
        getDoc(dbQuery)
        .then(resp => setProducto( {id: resp.id, ...resp.data() } ) )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [detalleId])  

    
    return (
        <div>
            { loading ? <div className="lds-dual-ring"></div>  // loading true
                    :
                    <div className="contenedorILC productos">
                        <ItemDetail producto= {producto}/>  
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;