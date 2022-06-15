import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import ItemDetail from '../Componentes/ItemDetail'
import { getFetch } from '../helpers/getFetch'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    // const { detalleId } = useParams()

    useEffect(() => {
        getFetch()  // fetch llamada a una api
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    console.log(producto)
    return (
        <div>
            { loading ? <div className="lds-dual-ring loadercentrado"></div>  // loading true
                    :
                    <div className="contenedorILC">
                        <ItemDetail producto= {producto}/>
                        
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;