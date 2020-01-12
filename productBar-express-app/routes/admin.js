const express = require("express");

const router = express.Router();

const store = {
    products : [
        { name : "A Book", price : "$34" ,  url : "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" },
        { name : "A Toy", price : "$23" ,  url : "https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }
    ],
    complaints : [
        {name : "Harris", complaint : "Can't Find Quality Vegatable"},
        {name : "Anna", complaint : "Fish was not healthy"},
        {name : "Hamza", complaint : "Can't find cart"}
    ]
}

router.get("/", (req, res, next) => {
    res.render("admin", {
        path : '/admin',
        products : store.products,
        complaints : store.complaints
    });
})

router.post("/add-product", (req,res,next) => {
    store.products.push(req.body)
    res.redirect("/")
} )


exports.routes = router;
exports.store = store;