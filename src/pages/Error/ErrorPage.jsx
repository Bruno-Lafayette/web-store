import React from 'react';
import { Link } from 'react-router-dom';
import Hamburguer from '../../assets/hamburguer.gif';
import './errorPage.css'

const ErrorPage = () => {
    return (
        <div className='containerError'>
            <img id='gifError' src={Hamburguer}/>
            <div id='error'>Página não encontrada</div>
            <Link className='returnHome' to={"/"}>Clique aqui para voltar ao inicio</Link>
        </div>
   
    )
}

export default ErrorPage