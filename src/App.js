import React from 'react';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import NavBar from './Componentes/NavBar';
import ItemCount from './Componentes/ItemCount';

function App() {
  return ( 
    <>
    <NavBar />
    <ItemListContainer />
    <ItemCount />
    </>
  );

}

export default App;
