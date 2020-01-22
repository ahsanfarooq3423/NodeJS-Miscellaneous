const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//sequelize object import
const sequelize = require('./util/database');

//Importing the Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Seqeulize Model Imports
const Author = require('./models/author');
const Book = require('./models/book');
const Cart = require('./models/cart');
const Customer = require('./models/customer');
const Publisher = require('./models/publisher');
const Warehouse = require('./models/warehouse');

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes)


app.use(errorController.get404);

sequelize.sync()
    .then(result => {
        // console.log(result)
        app.listen(3000, ()=> console.log("Server Listening on Port 3000"));
    })
    .catch(err => console.log(err))
