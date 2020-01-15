const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), "data", "complaints.json");

const getComplaintsData = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Complaint {
    constructor(body) {
        this.name = body.name;
        this.complaint = body.complaint
    }

    saveComplaint() {
        const newComplaint = {
            name : this.name,
            complaint : this.complaint
        }
        getComplaintsData( complaints => {
            complaints.push(newComplaint);
            fs.writeFile(p, JSON.stringify(complaints), err => {
                console.log(err)
            })
        } )
    }

    static fetchComplaints(cb) {
        getComplaintsData(cb);
    }
}