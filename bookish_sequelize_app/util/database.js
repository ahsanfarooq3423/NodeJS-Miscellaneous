const Sequelize = require("sequelize");

const sequelize = Sequelize('bookish', 'root', 'pioneer', {
    host : 'localhost',
    dialect : 'mysql2'
})

module.exports = sequelize;