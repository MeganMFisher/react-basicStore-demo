const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      cors = require('cors')


// massive(config.database).then(db => {
//     app.set('db', db)
// }).catch((err) => {
//     console.log(err)
// })

var port = 4000;

var app = express()
app.use(bodyParser.json())
app.use(cors())

const controller = require('./controller.js')

app.get('/products', controller.productsData)
app.get('/product/:id', controller.getProduct)

app.listen(port, function() {
  console.log("Started server on port", port);
});


