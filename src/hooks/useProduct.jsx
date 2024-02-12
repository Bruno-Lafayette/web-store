import React, { useState } from "react";

// Implementar Hook para isolar responsabilidade do carrinho de exibir e fazer as alterações na lista de produtos

const useProduct = ({addProduct, removeProduct, getListProduct, productID})=> {
    const [ product, setProduct] = useState([])

    if(getListProduct){

    }
        
    if(addProduct){
        let index = products.findIndex(product => product.id === productID.id)
        if (index < 0){
            setProduct.push(item)
          return true
        } else {
          return false
        }
    }

    if(removeProduct){
        setProduct(prevProducts => prevProducts.filter(product => product.id !== productID.id));
    }


}

export default useProduct