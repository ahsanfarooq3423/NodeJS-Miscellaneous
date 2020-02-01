const Complaint = require("../model/complaint");


exports.saveComplaint = (req, res, next) => {
    const name = req.body.name;
    const complaint_description = req.body.complaint;

    const complaint = new Complaint({
        name: name,
        complaint_description: complaint_description
    })
    complaint.save()
        .then(response => {
            res.redirect("/admin/add-complaint")
        })
        .catch(err => console.log(err))
}

exports.addComplaint = (req, res, next) => {
    Complaint.find()
        .then(complaints => {
            res.render('admin/complaints', {
                path : '/admin/add-complaint',
                complaints : complaints
            })
        })
        .catch(err => console.log(err))
}


exports.deleteComplaint = (req, res, next) => {
    Complaint.deleteOne({ _id : req.body.complaintId })
        .then(response => {
            console.log(response)
            res.redirect("/admin/add-complaint");
        })
}




