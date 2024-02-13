import React, { useState, useEffect } from 'react';
import productFech from '../axios/config';

export const useFetch = (path) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await productFech.get(path);
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();

        // Função de limpeza opcional - não há necessidade de retornar 'products' aqui
        return () => {
            // Qualquer limpeza necessária aqui...
        };
    }, [path]); // Incluir 'path' como dependência, se necessário
    return products
};
