const express = require('express')
const env = require('dotenv')
const connectDB = require('./config/db')

env.config()
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('api/travel', require('./routes/travelRoutes'))

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running port: ${PORT}`)
})