const Complaint = require("../model/complaint");


exports.saveComplaint = (req,res, next) => {
    const complaint = new Complaint(req.body);
    complaint.saveComplaint();
    res.redirect("/add-complaint")
}

exports.addComplaint = (req, res, next) => {
    Complaint.fetchComplaints( complaints => {
        res.render("admin/complaints",{
            path : '/add-complaint',
            complaints : complaints
        });
    } )
} 
    

