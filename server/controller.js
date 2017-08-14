const data = require('./data.js')

module.exports = {
    productsData: (req, res) => {
        res.send(data.products)
        // req.app.get('db').postContact(params).then((response) => {
        //     res.send('posted')
        // })
    },

    getProduct: (req, res) => {
        var products = data.products;
        var product = []
        products.map(e => {
            if(e.id == req.params.id ) {
                product.push(e)
            }
        })
        res.send(product)
    }
}