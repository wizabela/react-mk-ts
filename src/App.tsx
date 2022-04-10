import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {GiftsView} from "./views/GiftsView";
import {TestView} from "./views/TestView";
import {Header} from "./components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./views/SingleGiftView";

export const App = () => {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/gift" element={<GiftsView/>}/>
              <Route path="/gift/:idOfGift" element={<SingleGiftView/>}/>
              <Route path="/test/:something" element={<TestView/>}/>
              <Route path="*" element={<NotFoundView/>}/>
          </Routes>
      </>
  );
}