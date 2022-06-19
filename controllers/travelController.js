const Travel = require('../models/travel.modal')
// method: get
// descr: get all travels books

const getAllTravels = async (req,res) => {
    try {
        const travel = await Travel.find()
        res.status(200).json({
            massage: 'success',
            travel
        })
    } catch (error) {
        console.log(error)
    }
}

// method: get
// descr: get one travel book by id

const getTravelById = async(req,res) => {
    try {
        const travel = await Travel.findById(req.params.id)

        if(!travel){
            return res.status(404).json({
                message: 'success',
                travel
            })
        }
        return res.status(200).json({
            message: 'Not found'
        })

    } catch (err) {
        console.log(err)
    }
}

// method: post
// descr: add new travel book

const addTravelBook = async(req,res) => {
    try {
        const {title,image,descr} = req.body
        const newTravel = await Travel.create({
            title,
            image,
            descr
        })

        res.status(201).json({
            massage: 'success',
            newTravel
        })

    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getAllTravels,
    getTravelById,
    addTravelBook
}

