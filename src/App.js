import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer';
import NavBar from './Componentes/NavBar';
import Nosotros from './Componentes/Nosotros/Nosotros';
import Contacto from './Componentes/Contacto/Contacto';
import CartContextProvider from './Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Componentes/Cart"



function App() {
  return ( 
  <BrowserRouter> 
    <CartContextProvider>
      <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/tienda/:id" element={<ItemListContainer />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cart" element = { <Cart />} />
        
            
        
      </Routes>
    </CartContextProvider>  
  </BrowserRouter>  
  );

}

export default App;
