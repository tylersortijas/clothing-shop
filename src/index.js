import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import RouterSwitch from "./RouterSwitch";
import ProductProvider from "./context/ProductContext";
import SidebarProvider from "./context/SidebarContext";
import CartProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <RouterSwitch />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
