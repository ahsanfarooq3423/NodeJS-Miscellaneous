const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin")
const complaintRoutes = require("./routes/complaints")
const productRoutes = require("./routes/products")

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes);
app.use(complaintRoutes);
app.use(productRoutes);



app.use((req,res,next)=> {
    res.status(404).render("404")
})

app.listen(3000, ()=> console.log("The server is listening at port 3000"));