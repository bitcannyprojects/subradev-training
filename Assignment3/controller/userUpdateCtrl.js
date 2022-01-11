const db = require('../src/database')

const User = db.user

let updateUserNameById = async (req, res) => {
    let id = req.params.id
    let name = req.params.name

    let data = await User.update({ name: name }, {
        where: {
            id: id
        }
    })

    let response = {
        data: "ok",
        record: data
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}


let updateUserName = async (req, res) => {
    let name1 = req.params.name1
    let name2 = req.params.name2

    let data = await User.update({ name: name2 }, {
        where: {
            name: name1
        }
    })

    let response = {
        data: "ok",
        record: data,
        fileds: {
            name1, name2
        }
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}


let updateEmail = async (req, res) => {
    let name = req.params.name
    let email = req.params.email

    let data = await User.update({ email: email }, {
        where: {
            name: name
        }
    })

    let response = {
        data: "ok",
        record: data,
        fileds: {
            name, email
        }
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}


let updateEmailById = async (req, res) => {
    let id = req.params.id
    let email = req.params.email

    let data = await User.update({ email: email }, {
        where: {
            id: id
        }
    })

    let response = {
        data: "ok",
        record: data,
        fileds: {
            id, email
        }
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}




let updateCommentById = async (req, res) => {
    let id = req.params.id
    let comment = req.params.comment

    let data = await User.update({ comment: comment }, {
        where: {
            id: id
        }
    })

    let response = {
        data: "ok",
        record: data,
        fileds: {
            id, comment
        }
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}

let updateCommentByName = async (req, res) => {
    let name = req.params.name
    let comment = req.params.comment

    let data = await User.update({ comment: comment }, {
        where: {
            name: name
        }
    })

    let response = {
        data: "ok",
        record: data,
        fileds: {
            name, comment
        }
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}

let updateCommentByemail = async (req, res) => {
    let email = req.params.email
    let comment = req.params.comment

    let data = await User.update({ comment: comment }, {
        where: {
            email: email
        }
    })

    let response = {
        data: "ok",
        record: data,
        fileds: {
            email, comment
        }
    }

    res.status(200).send(response)
    //console.log(`update successfull`);
}




module.exports = {
    updateUserNameById,
    updateUserName,
    updateEmail,
    updateEmailById,
    updateCommentById,
    updateCommentByName,
    updateCommentByemail

}