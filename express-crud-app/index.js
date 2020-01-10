const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const homeRoutes  = require("./routes/home");
const queryRoutes = require("./routes/query");


const app = express();

app.use(bodyParser.urlencoded({extended : true}))   


app.use("/home", homeRoutes)
app.use("/query", queryRoutes)


app.use((req,res,next)=> {
    res.sendFile(path.join(__dirname, "views", "404.html"))
})



app.listen(3000, ()=> console.log("Server listening on Port 3000"));