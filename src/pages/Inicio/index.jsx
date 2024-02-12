import React from 'react';
import './Inicio.css'
import { MdAddShoppingCart } from "react-icons/md";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productFech from '../../axios/config';
import {insertProduct} from '../Carrinho/index';
import Modal from '../../components/Modal/Modal';
import ModalDetalhes from '../../components/Modal/Modal'
import useProduct from '../../hooks/useProduct';

const Inicio = () => {

    const [products, setProducts] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false)
    const [detailProduct, setDetailProduct] = useState([])


    const getProducts = async() => {
        try {
            const response = await productFech.get('/produtos') 
            const data = response.data
            setProducts(data)
        } catch (e) {
            console.log(e)       
        }
    }
    useEffect( () => {
        getProducts()
    }, [])

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
                            const response = insertProduct(detailProduct)
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
                            const response = insertProduct(product)
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