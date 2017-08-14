const data = require('./data.js')

module.exports = {
    productsData: (req, res) => {
        res.send(data.products)
        // req.app.get('db').postContact(params).then((response) => {
        //     res.send('posted')
        // })
    } 
}