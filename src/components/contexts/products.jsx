import React, { createContext, useState } from "react";
import { api } from "../../services/api";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
  setLoading: () => {},
  loading: null,
  removeProduct: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeProduct = async (productToRemove) => {
    api.delete(`/product/${productToRemove.id}`);
    const newProducts = products.filter(
      (product) => product.id !== productToRemove.id
    );
    setProducts(newProducts);
  };

  const value = {
    products,
    setProducts,
    setLoading,
    loading,
    removeProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
