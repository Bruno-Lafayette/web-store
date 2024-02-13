import React, { useState } from 'react';
import './Inicio.css'
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import ModalDetalhes from '../../components/Modal/Modal'
import {useProduct} from '../../hooks/useProduct';
import { useFetch } from '../../hooks/useFetch';

const Inicio = () => {

    const [openModal, setOpenModal] = useState(false)
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false)
    const [detailProduct, setDetailProduct] = useState([])
    const {addProduct} = useProduct()

    const products = useFetch('/produtos')

    return (
        <div >
        <Modal isOpen={openModal} setModalClose={() => setOpenModal(!openModal)} children={(
            <div> 
                <p className="title">Sucesso</p>
                <p className="msgModal">Produto adicionado ao carrinho</p>
                <Link to={`/carrinho`} className="link">ir para o carrinho</Link>
            </div>
        )}/>
        <ModalDetalhes isOpen={openModalDetalhes} setModalClose={() => setOpenModalDetalhes(!openModalDetalhes)} children={(
            <div> 
                <p className="title">{detailProduct.nome}</p>
                <p className="msgModal">{detailProduct.descricao}</p>
                <button onClick={() => {
                            const response = addProduct({item: detailProduct})
                            setOpenModal(response)
                            setOpenModalDetalhes(!openModalDetalhes)
                        } }><MdAddShoppingCart/></button>
            </div>
        )}/>
        <h1>Produtos</h1>
        <div className="containerCards">
            {products.length === 0 ? <p>Carregando</p> : (
            products.map((product) => (
                 <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h3>{product.nome}</h3>
                    <p >R${product.preco.toFixed(2)}</p>
                    <div className='containerButtons'>
                        <button id='detailProduct' onClick={() => {
                            setOpenModalDetalhes(true)
                            setDetailProduct(product)
                        }}>Detalhes</button>
                        <button onClick={() => {           
                            const response = addProduct({item :product})
                            setOpenModal(response)
                        } }><MdAddShoppingCart/></button>
                    </div>
                </div>
            ))
        )}
        </div>
      </div>
    )
}

export default Inicio