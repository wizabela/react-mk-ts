import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {GiftsView} from "./views/GiftsView";
import {TestView} from "./views/TestView";
import {Header} from "./components/Header/Header";

export const App = () => {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/gift" element={<GiftsView/>}/>
              <Route path="/test" element={<TestView/>}/>
          </Routes>
      </>
  );
}