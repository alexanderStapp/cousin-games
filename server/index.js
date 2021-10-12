require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

// CONTROLLERS

// INSTANCE CREATION
const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 *60 *60 *24}
}))

// DATABASE/SERVER
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('database connected!')
    app.listen(SERVER_PORT, () => console.log(`serevr is listening on ${SERVER_PORT} :3`))
}).catch(err => console.log(err))

// ENDPOINTS