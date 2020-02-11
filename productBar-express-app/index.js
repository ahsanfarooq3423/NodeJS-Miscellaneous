const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require('mongoose');

const session = require('express-session');

const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = 'mongodb://ahsan:mongodb8008@ds129233.mlab.com:29233/productbar';

const store = new MongoDBStore({
    uri : MONGODB_URI,
    collection : 'session'
});


const User = require('./model/user');

const adminData = require("./routes/admin");
const complaintRoutes = require("./routes/complaints");
const productRoutes = require("./routes/products");
const authRoutes = require('./routes/auth');

const app = express();

app.use(
    session({
        secret : 'secret',
        resave : false,
        saveUninitialized : false,
        store : store
    })
)

app.use((req, res, next) => {
    if (!req.session.user){
        return next()
    }
    User.findOne({_id : req.session.user._id})
        .then(user => {
            req.user = user
            next()
        })
        .catch(err => console.log(err))
})

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes);
app.use("/admin",complaintRoutes);
app.use(productRoutes);
app.use(authRoutes);


app.use((req,res,next)=> {
    res.status(404).render("404", {path : '404'})
})

app.use((req,res,next)=> {
    res.redirect('/products');
    next();
})

mongoose.connect(MONGODB_URI)
    .then(response => {
        console.log('---------CONNECTED WITH THE MONGO DB----------')
        app.listen(3000);
    })
    .catch(err => console.log(err))

