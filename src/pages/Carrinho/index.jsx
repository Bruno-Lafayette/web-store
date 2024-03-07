import React, { useState } from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";
import './Carrinho.css';
import { useProduct } from '../../hooks/useProduct';
import Modal from '../../components/Modal/Modal';


const Carrinho = () => {

    const [quantities, setQuantities] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const { products, removeProduct, removeAllProducts } = useProduct()

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
      <>
        <Modal isOpen={openModal} setModalClose={() => {setOpenModal(!openModal), removeAllProducts()}} children={(
            <div> 
                <p className="title">Compra finalizada com Sucesso</p>
                <div className='containerNF'>
                  {products.map(product => (
                      <div key={product.id} className='containerNFKey'>
                          <div>
                            <p >{product.nome}</p>
                          </div>
                        <div className='containerPriceNF'>
                          <div>
                            <p >quantidade {(quantities[product.id] || 1)} |</p>
                          </div>
                          <div>
                            <p>|  ----- valor unitário R${product.preco.toFixed(2)} -----  |</p>
                          </div>
                          <div>
                          <p>| Subtotal: R${(product.preco * (quantities[product.id] || 1)).toFixed(2)}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                  ))}
                </div>
                <p className="msgModal">Valor total do pedido: R${getSubtotal().toFixed(2)}</p>
            </div>

        )}/>
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
                <div className="row" key={product.id}>
                  <h2>{product.nome}</h2>
                  <input
                    type="number"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                  />
                  <p>R${product.preco.toFixed(2)}</p>
                  <p>R${((quantities[product.id] || 1) * product.preco).toFixed(2)}</p>
                  <button onClick={() => removeProduct({item : product})}><MdRemoveShoppingCart/></button>
                </div>
              ))
            )
          }
          </div>
          <div className="containerPrice">
            {
              products.length === 0 ? '': (
              <div>
                <p>Total: R${getSubtotal().toFixed(2)}</p>
                <button
                onClick={() => {
                  setOpenModal(true)}}
                >Finalizar compra</button>
              </div>
              )
            }
          </div>
        </div>
      </>
    )
}

export default Carrinho