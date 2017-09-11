require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive');


const app = express()





app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
})