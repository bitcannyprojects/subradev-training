const express = require('express')
const { route } = require('..')
const router = express.Router()
const userCtrl = require('../../controller/userGetCtrl')


/* router.get('/', (req, res) => {
    res.send('get method')
    console.log('get');
}) */

/* router.get('/', (req, res) => {
    res.send(" Options; -\n 1. get / all-- > findAllUser\n 2. get / id /: id-- > findUserById\n 3. get / name /: name-- > findUserByName\n 4. get / email /: email-- > findUserByEmail")
}) */

router.get('/', (req, res) => {
    res.render('get')
})

router.get('/all', userCtrl.findAllUser)
router.get('/id/:id', userCtrl.findUserById)
router.get('/name/:name', userCtrl.findUserByName)
router.get('/email/:email', userCtrl.findUserByEmail)

module.exports = router
