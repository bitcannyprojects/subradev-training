const express = require('express')
const router = express.Router()

const userCtrl = require('../../controller/userDeleteCtrl')

/* router.get('/', (req, res) => {
    res.send('delete method')
    console.log('delete');
}) */

router.get('/', (req, res) => {
    res.render('delete')
})

router.delete('/all', userCtrl.deleteAllUser)
router.delete('/id/:id', userCtrl.deleteUserById)
router.delete('/name/:name', userCtrl.deleteUserByNmae)
router.delete('/email/:email', userCtrl.deleteUserByEmail)

module.exports = router
