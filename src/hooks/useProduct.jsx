import React from "react";

const ProductContext = React.createContext()

export const useProduct = () => React.useContext(ProductContext)

export const ProductProvider = ({children}) => {
    const [ products, setProduct] = React.useState([])

    const addProduct = ({ item }) => {
      const index = products.findIndex(product => product.id === item.id);
      if (index < 0) {
          setProduct(prevProducts => [...prevProducts, item]);
          return true; 
      } else {
          return false; 
      }
    }

    const removeProduct = ({item}) => {
        setProduct(prevProducts => prevProducts.filter(product => product.id !== item.id));
    }

    const removeAllProducts = () => {
      setProduct([])
    }
    
    return (
      <ProductContext.Provider value={{ products, addProduct, removeProduct, removeAllProducts }}>
        {children}
      </ProductContext.Provider>
  );
}