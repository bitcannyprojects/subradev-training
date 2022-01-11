const db = require('../src/database')
const User = db.user


/* let createUser = async (req, res) => {
    let data = await User.create({ name: 'santanu', email: 'san@gmail.com', comment: 'male' })

    let response = {
        data: 'ok',
        record: data
    }
    res.status(200).json(response)
} */


let createUserByquery = async (req, res) => {
    let query = req.query

    let data = await User.create(query)
    let response = {
        data: 'ok',
        record: data
    }
    res.status(201).json(response)
    //console.log(query);
}


let createUserByUrl = async (req, res) => {
    let name = req.params.name
    let email = req.params.email
    let comment = req.params.comment

    let data = await User.create({ name, email, comment })

    let response = {
        data: 'ok',
        record: data
    }
    res.status(201).json(response)
    //console.log(data);

}


let createUserByBody = async (req, res) => {
    let body = req.body

    let data = await User.create(body)
    let response = {
        data: 'ok',
        record: data
    }
    res.status(201).json(response)
    //console.log(body);
}

let createBulkUser = async (req, res) => {
    let body = req.body
    let data = await User.bulkCreate(body.post)
    let response = {
        data: 'ok',
        record: data
    }
    res.status(201).json(response)
    //console.log(body.post);
}



module.exports = {
    //createUser,
    createUserByquery,
    createUserByUrl,
    createUserByBody,
    createBulkUser
}