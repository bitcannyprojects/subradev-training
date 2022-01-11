
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: 'test@gmail.com',
            allowNull: false,
            unique: true

        },
        comment: {
            type: DataTypes.TEXT
        }
    })

    return User
}