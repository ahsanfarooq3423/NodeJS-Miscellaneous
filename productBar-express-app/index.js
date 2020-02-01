const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const mongoose = require('mongoose');

const adminData = require("./routes/admin")
const complaintRoutes = require("./routes/complaints")
const productRoutes = require("./routes/products")

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes);
app.use("/admin",complaintRoutes);
app.use(productRoutes);

app.use((req,res,next)=> {
    res.redirect('/products')
    next()
})


app.use((req,res,next)=> {
    res.status(404).render("404", {path : '404'})
})

mongoose.connect('mongodb://ahsan:mongodb8008@ds129233.mlab.com:29233/productbar')
    .then(response => {
        console.log('---------CONNECTED WITH THE MONGO DB----------')
        app.listen(3000)
    })
    .catch(err => console.log(err))