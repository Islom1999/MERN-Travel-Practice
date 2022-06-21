const express = require('express')
const env = require('dotenv')
const connectDB = require('./config/db')
const travelRouters = require('./routes/travelRoutes')
const cors = require('cors')

env.config()
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req,res) => {
    res.send('home')
})
app.use('/api/travel', travelRouters)

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running port: ${PORT}`)
})