const express = require('express')
const router = express.Router()

let userCtrl = require('../../controller/userCreateCtrl')

// router.get('/', (req, res) => {
//     res.send('post method')
//     console.log('post');
// })

//router.post('/', userCtrl.createUser)

router.get('/', (req, res) => {
    res.render('post')
})

router.post('/query', userCtrl.createUserByquery)
router.post('/:name/:email/:comment', userCtrl.createUserByUrl)
router.post('/body', userCtrl.createUserByBody)
router.post('/bulk', userCtrl.createBulkUser)

module.exports = router
