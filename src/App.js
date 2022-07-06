import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./Componentes/Cart";
import Contacto from './Componentes/Contacto/Contacto';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/NavBar';
import Nosotros from './Componentes/Nosotros/Nosotros';
import ItemDetailContainer from './Container/ItemDetailContainer';
import CartContextProvider from './Context/CartContext';
import Checkout from './Firebase/Checkout';

function App() {

  return ( 
  <BrowserRouter> 
    <CartContextProvider>
      <NavBar />
      <Routes> 
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cart" element = { <Cart />} />
        <Route path="/Checkout" element = { <Checkout />} />
        
        
            
        
      </Routes>
    </CartContextProvider>  
  </BrowserRouter>  
  );

}

export default App;
