const express = require('express')
const router = express.Router()

const userCtrl = require('../../controller/userUpdateCtrl')


/* router.get('/', (req, res) => {
    res.send('update method')
    console.log('update');
}) */

router.get('/', (req, res) => {
    res.render("update")
})

router.patch('/namebyid/:id/:name', userCtrl.updateUserNameById)
router.patch('/name/:name1/:name2', userCtrl.updateUserName)

router.patch('/emailbyid/:id/:email', userCtrl.updateEmailById)
router.patch('/email/:name/:email', userCtrl.updateEmail)

router.patch('/comment/:id/:comment', userCtrl.updateCommentById)
router.patch('/commentbyname/:name/:comment', userCtrl.updateCommentByName)
router.patch('/commentbyemail/:email/:comment', userCtrl.updateCommentByemail)


module.exports = router
