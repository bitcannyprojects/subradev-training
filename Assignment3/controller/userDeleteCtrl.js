const { Op } = require('sequelize')
const db = require('../src/database')

const User = db.user

let deleteAllUser = async (req, res) => {
    let data = await User.destroy({
        truncate: true
    })

    let response = {
        data: 'ok',
        record: data
    }

    if (response.record == 0) {
        res.status(404).json(response)
    } else {
        res.status(200).json(response)
    }
    //console.log(data);
}


let deleteUserById = async (req, res) => {
    let id = req.params.id

    let data = await User.destroy({
        where: {
            id: id
        }
    })

    let response = {
        data: 'ok',
        record: data
    }

    if (response.record == 0) {
        res.status(404).json(response)
    } else {
        res.status(200).json(response)
    }

    //console.log(`deleted id:${id}`);
}


let deleteUserByNmae = async (req, res) => {
    let name = req.params.name

    let data = await User.destroy({
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

    if (response.record == 0) {
        res.status(404).json(response)
    } else {
        res.status(200).json(response)
    }
    //console.log(`deleted name:${name}`);
}


let deleteUserByEmail = async (req, res) => {
    let email = req.params.email

    let data = await User.destroy({
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

    if (response.record == 0) {
        res.status(404).json(response)
    } else {
        res.status(200).json(response)
    }
    // console.log(`deleted email:${email}`);
}




module.exports = {
    deleteAllUser,
    deleteUserById,
    deleteUserByNmae,
    deleteUserByEmail
}