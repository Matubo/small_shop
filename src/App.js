import { useState, useReducer } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuSpace from "./features/elements/reactElements/menu";

import StoreSpace from "./features/elements/reactElements/storeSpace";

function App() {
  return (
    //<DeleteFromApp/>
    <div className="app">
      <MenuSpace />
      <StoreSpace />
      {/* <Footer> */}
    </div>
  );
}

export default App;
