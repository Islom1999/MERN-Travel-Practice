const {Schema, model} = require('mongoose')

const TravelModel = new Schema({
    title: {
        type: 'string',
        required: true,
        minlength: 3
    },
    image: {
        type: 'string',
        required: true,
    },
    descr: {
        type: 'string',
        required: true,
    }
})

module.exports = model('Travel', TravelModel)