const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Warehouse = sequelize.define('wareHouse', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    }
});


module.exports = Warehouse;