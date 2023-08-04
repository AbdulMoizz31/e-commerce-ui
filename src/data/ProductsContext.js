import React from "react";
import { createContext, useState } from "react";
import { Products } from "./Products";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider };
