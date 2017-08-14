import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';


class Store extends Component {
  constructor() {
    super() 
      this.state = {
        products: []
      }
  }

componentDidMount() {
    getProducts().then(products => {
      this.setState({
        products: products
      })
      console.log(this.state.products)
    })
}

render() {

        const products = this.state.products.map((product, i) => (
            <ul key={i} className='product'>
                 <Link to={ `detail/${product.id}`} name={product.title}> 
                 <img src={ product.image } className='storeImages' alt='clothing'/> 
                 </Link> 
    
                 <h3>{ product.title }</h3> 
            </ul>
        ))

    return (
        <div className='productsContainer'>
            { products }
        </div>
    );
  }
}

export default Store;