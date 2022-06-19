const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true
        })
        console.log(`Connected DB: ${conn.connection.host}`) 

    } catch (error) {
        console.log('salom')
        console.log(error)
    }
}

module.exports = connectDB