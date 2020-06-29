import React from 'react';
import './App.css';
import Shop from './Components/Shop';
import ItemInCartContextContextProvider from './Components/ItemInCartContext'

function App() {
  return (
    <div className="App">
      <ItemInCartContextContextProvider>
      <Shop/>
      </ItemInCartContextContextProvider>
    </div>
  );
}

export default App;
