const express = require('express')
const routers = express.Router()

const getRoute = require('./routers/get')
const postRoute = require('./routers/post')
const updateRoute = require('./routers/update')
const deleteRoute = require('./routers/delete')
const router = require('./routers/get')


routers.get('/', (req, res) => {
    //res.send('hiiiii')
    res.render('home')
})
// router.get('/home', (req, res) => {
//     res.render('home')
// })

routers.use('/get', getRoute)
routers.use('/post', postRoute)
routers.use('/update', updateRoute)
routers.use('/delete', deleteRoute)

module.exports = routers