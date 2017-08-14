import axios from 'axios';

export function getProducts() {
    return axios.get('http://localhost:4000/products').then(res => res.data)
}

export function getProduct(id) {
   return axios.get('http://localhost:4000/product/' + id).then(res => res.data)
}
