import React from "react";
import "./App.css";
import MenuSpace from "./features/elements/reactElements/menu";
import StoreSpace from "./features/elements/reactElements/storeSpace";
import Footer from "./features/elements/reactElements/footer";

function App() {
  return (
    <div className="app_body">
      <MenuSpace />
      <StoreSpace />
      <Footer />
    </div>
  );
}

export default App;
