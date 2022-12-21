const express = require('express');

const router = express.Router();


router.use(express.urlencoded({ extended: true }));

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// // Require isLoggedIn
// const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const petCntrl = require("../Controllers/pets");

// Routes for the pet
// router.get("/pet/add", isLoggedIn, petCntrl.pet_create_get);
router.post("/pet/add", petCntrl.pet_create_post);
router.get("/pet/add", petCntrl.pet_create_get);
router.get("/pet/index", petCntrl.pet_index_get);
router.get("/pet/details", petCntrl.pet_show_get);

router.get("/pet/edit", petCntrl.pet_edit_get);
router.put("/pet/update", petCntrl.pet_update_put);

router.get("/pet/delete", petCntrl.pet_delete_get);

router.get("/mypets/index", petCntrl.pet_mypets_get);

module.exports = router;