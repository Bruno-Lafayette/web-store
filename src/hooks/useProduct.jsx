import React from "react";

const ProductContext = React.createContext()

export const useProduct = () => React.useContext(ProductContext)

export const ProductProvider = ({children}) => {
    const [ products, setProduct] = React.useState([])

    const addProduct = ({ item }) => {
      console.log(item)
      const index = products.findIndex(product => product.id === item.id);
      console.log(index)
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
    return (
      <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
        {children}
      </ProductContext.Provider>
  );
}