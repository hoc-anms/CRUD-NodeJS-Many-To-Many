//Define dependences
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

//import routes, config
const question = require('../src/routes/question.routes')
const tag = require('../src/routes/tag.routes')
const config = require('./configs/config');

// Set up the express app
const app = express()
//tiny run on product
//dev run on local
//=> performance
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// Define promises for mongoose
mongoose.Promise = global.Promise

//Connect mongodb
mongoose.connect(
    `mongodb+srv://admin:${config.MONGODB_ATLAS_PW}@crud-nodejs-3l0u0.mongodb.net/test?retryWrites=true`,
    {
        useNewUrlParser: true,
    }
);

/****************************************************
*Define Routes middleware, while pass data to client
****************************************************/
app.use('/question', question)
app.use('/tag', tag)
/***************************************************/

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not found!')
    err.status = 404
    next(err)
})

// Erorr handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    // Respond to client
    res.status(status).json({ error: { message: error.message } })
})

module.exports = app;