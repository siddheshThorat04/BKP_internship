const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const Intern = mongoose.model("Intern", internSchema);
module.exports = Intern