const sequelize = require('../util/database');
const Sequelize  = require('sequelize');

const Book = sequelize.define('book',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    isbn : {
        type : Sequelize.BIGINT,
        allowNull : false
    }

})

module.exports = Book;