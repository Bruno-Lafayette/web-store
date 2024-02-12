import axios from "axios";

const productFech = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'aplication/json'
    }
})

export default productFech