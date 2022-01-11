const { Op } = require('sequelize')
const db = require('../src/database')

const User = db.user

let findAllUser = async (req, res) => {
    let data = await User.findAndCountAll()

    let response = {
        data: 'ok',
        record: data
    }
    res.status(200).json(response)
}


let findUserById = async (req, res) => {
    let id = req.params.id

    let data = await User.findOne({
        where: {
            id: {
                [Op.eq]: id
            }
        }
    })

    let response = {
        data: 'ok',
        record: data
    }
    res.status(200).json(response)
}



let findUserByName = async (req, res) => {
    let name = req.params.name

    let data = await User.findOne({
        where: {
            name: {
                [Op.eq]: name
            }
        }
    })

    let response = {
        data: 'ok',
        record: data
    }
    res.status(200).json(response)
}



let findUserByEmail = async (req, res) => {
    let email = req.params.email

    let data = await User.findOne({
        where: {
            email: {
                [Op.eq]: email
            }
        }
    })

    let response = {
        data: 'ok',
        record: data
    }
    res.status(200).json(response)
}




module.exports = {
    findAllUser,
    findUserByName,
    findUserByEmail,
    findUserById
}