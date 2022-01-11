const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('blogdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 }
})

sequelize.authenticate()
    .then(() => {
        console.log('connected');
    })
    .catch((err) => {
        console.log('Error' + err);
    })


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('../model/user')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('user sync');
    })


module.exports = db