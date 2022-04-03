import React from 'react';
import './App.css';
import {CryptoPrice} from "./components/CryptoPrice/CryptoPrice";
import {GiftsList} from "./components/Gifts/GiftsList";

export const App = () => {
  return (
    <div className="App">
      <GiftsList/>
    </div>
  );
}