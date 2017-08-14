import React, { Component } from 'react'
import { getProduct } from '../../../services/productService';

class Detail extends Component {
    constructor() {
        super()

        this.state = {
            product: ''
        }
    }

    componentDidMount() {
    getProduct(this.props.match.params.id).then(product => {
      this.setState({
        product: product[0]
      })
    })

    }
    render() {

        const product = this.state.product;
        console.log(product)
        return(
             <div className="detailSection">
                <h2>{ product.title }</h2>
                <img src={ product.image } className='detailImage' alt='clothing'/>
                {/* <h3>{ product.desc }</h3> */}
                <h4>{ product.price }</h4>
            </div>
        )
    }

}

export default Detail