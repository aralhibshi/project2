// Requrie User Model
const User = require("../Models/User");
const Pet = require("../Models/Pet");

// HTTP GET - Display User Index
exports.user_index_get = (req, res) => {
    User.find()
    .then(user => {
        res.render("user/index", {user})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Display User Details
exports.user_details_get = (req, res) => {
    res.render("user/details");
};