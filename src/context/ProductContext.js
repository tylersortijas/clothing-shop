import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Asynchronously grabbing data from the Fakestore API to grab all products unfiltered
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // Set the state of products with the data we pulled from the API
      setProducts(data);
    };
    // call the fetchproducts anonymous function
    fetchProducts();
  }, []);
  return (
    // Return ProductContext, then set its value to products
    // Products now contains all the data from the FakeStoreAPI
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
