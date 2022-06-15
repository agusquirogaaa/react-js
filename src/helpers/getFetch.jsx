
const productos = [
    {"name": "Remera Negra", "precio": "$1500", "url":"../assets/buzo1.png", "stock":"50", "id":"1"},
    {"name": "Remera Blanca", "precio": "$1500", "url":"../assets/buzo2.png", "stock":"50", "id":"2"},
    {"name": "Remera Rosa", "precio": "$1500", "url":"../assets/buzo3.png", "stock":"20", "id":"3"},
    {"name": "Remera Beige", "precio": "$1500", "url":"../assets/buzo4.png", "stock":"10", "id":"4"}
  ]

  export const getFetch = ( id ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find( producto => producto.id === id ) : productos
            resolve (query)
        }, 1000)
    })
}
