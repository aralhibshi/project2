const express = require("express");
const router = express.Router();

// Controller
const userCtrl = require("../Controllers/user");

router.get("/user/index", userCtrl.user_index_get);

router.get("/user/details", userCtrl.user_details_get);

// Export Router
module.exports = router