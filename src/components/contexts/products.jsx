import React, { createContext, useState } from "react";
import { api } from "../../services/api";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
  setLoading: () => {},
  loading: null,
  removeProduct: () => {},
  addNewProduct: () => {},
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

  const addNewProduct = async (productToAdd) => {
    api.post("/product", { name: productToAdd }).then((response) => {
      const newProduct = response.data.data;
      setProducts([...products, newProduct]);
    });
  };

  const value = {
    products,
    setProducts,
    setLoading,
    loading,
    removeProduct,
    addNewProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
