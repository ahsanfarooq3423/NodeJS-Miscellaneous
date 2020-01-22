const sequelize = require('../util/database');
const Sequelize  = require('sequelize');

const Publisher = sequelize.define('publisher',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = Publisher;