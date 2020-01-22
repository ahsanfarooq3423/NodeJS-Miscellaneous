const Sequelize = require("sequelize");

const sequelize = new Sequelize('bookish', 'root', 'pioneer3423', {
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = sequelize;