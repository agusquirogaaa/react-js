import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Componentes/ItemDetail'
import { getFetch } from '../helpers/getFetch'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()
    
    useEffect(() => {
        getFetch(detalleId)  // fetch llamada a una api
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
    }, )

    
    return (
        <div>
            { loading ? <div className="lds-dual-ring "></div>  // loading true
                    :
                    <div className="contenedorILC productos">
                        <ItemDetail producto= {producto}/>  
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;