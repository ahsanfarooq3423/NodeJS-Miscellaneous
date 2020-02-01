const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    complaint_description : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model( 'Complaint' , complaintSchema);