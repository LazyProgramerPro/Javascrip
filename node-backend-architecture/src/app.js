require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
//Khai báo dotenv

const app = express()

console.log('Process::', process.env)

//Init middlewares

app.use(morgan("dev"))
app.use(helmet())
app.use(compression())


// morgan("dev"):dev
// morgan("compiled"):production
// morgan("common")
// morgan("short")
// morgan("tiny")

//Init DB

require('./dbs/init.mongodb')

const { countConnect,checkOverload} = require('./helpers/check.connect')
// countConnect()
// checkOverload()

//Init Rourte

//Handle Errors


module.exports = app