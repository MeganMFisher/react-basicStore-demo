import axios from 'axios';

export function getProducts() {
    return axios.get('http://localhost:4000/Products').then(res => res.data)
}


