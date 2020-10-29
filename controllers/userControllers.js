const userControllers = require("../models/userModels");
const router = require("./interestControllers");

function userController(req, res) {
    res.json(users)
}


module.exports = userController;    