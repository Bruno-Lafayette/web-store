import React from 'react';
import { useState } from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";
import './Carrinho.css';
import useProduct from '../../hooks/useProduct';

const products = []

export const insertProduct = (item) => {
  let index = products.findIndex(product => product.id === item.id)
  if (index < 0){
    products.push(item)
    return true
  } else {
    return false
  }
}

const removeProduct = (item) => {
    products(prevProducts => prevProducts.filter(product => product.id !== item.id));
}

const Carrinho = () => {

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
      setQuantities(prevState => ({
        ...prevState,
        [productId]: quantity
      }));
    };
  
    const getSubtotal = () => {
      let subtotal = 0;
      products.forEach(product => {
        const quantity = quantities[product.id] || 1;
        subtotal += product.preco * quantity;
      });
      return subtotal;
    };

    return (
      <div>
        <h1>Carrinho</h1>
         { products.length === 0 ? '' : (
         <div className='header'>
            <p id='productName'>Produtos</p>
            <p id='qtd'>Qtd</p>
            <p id='unitaryPrice'>Valor</p>
            <p id='totalPrice'>Subtotal</p>
        </div>
        )}
        <div>

          <div id='containerList'>
          {
            products.length === 0 ? <p className='listNull'>Nenhum produto adicionado</p> : (
              products.map((product) => (
                <div className="row">
                  <h2>{product.nome}</h2>
                  <input
                    type="number"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                  />
                  <p>R${product.preco.toFixed(2)}</p>
                  <p>R${((quantities[product.id] || 1) * product.preco).toFixed(2)}</p>
                  <button onClick={() => removeProduct(product)}><MdRemoveShoppingCart/></button>
                </div>
              ))
            )
          }
          </div>
          <div className="price">
            {
              products.length === 0 ? '': <p>Total: R${getSubtotal().toFixed(2)}</p>
            }
          </div>
        </div>
      </div>
    )
}

export default Carrinho