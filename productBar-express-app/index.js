const express = require("express");
const bodyParse = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin")
const complaintRoutes = require("./routes/complaints")
const productRoutes = require("./routes/products")

const app = express();


app.use("/admin", adminRoutes);
app.use(complaintRoutes);
app.use(productRoutes);

app.use((req,res,next)=> {
    res.send("The server is listening")
})

app.listen(3000, ()=> console.log("The server is listening at port 3000"));