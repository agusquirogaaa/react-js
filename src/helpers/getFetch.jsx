
const productos = [
    {"name": "Buzo Medusa", "precio": "1500", "url":"../assets/buzo1.png", "stock":"50", "id":"1"},
    {"name": "Buzo Rosa", "precio": "1500", "url":"../assets/buzo2.png", "stock":"50", "id":"2"},
    {"name": "Buzo Dejection", "precio": "1500", "url":"../assets/buzo3.png", "stock":"20", "id":"3"},
    {"name": "Buzo David", "precio": "1500", "url":"../assets/buzo4.png", "stock":"10", "id":"4"}
  ]

  export const getFetch = ( id ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const query = id ? productos.find( producto => producto.id === id ) : productos
            resolve (query)
        }, 1000)
    })
}
