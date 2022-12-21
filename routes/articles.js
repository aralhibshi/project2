const express= require('express');
const router= express.Router();


// router.use(express.urlencoded({ extended: true }));

// Controller
const articleCntrl = require("../Controllers/articles");

// // Routes
// router.get('/articles/add', articleCntrl.article_create_get);
// router.post('/articles/add', articleCntrl.article_create_post);

router.get('/article/index', articleCntrl.article_index_get);
router.get('/myarticles/index', articleCntrl.article_myarticles_get);
// router.get('/articles/details', articleCntrl.article_details_get);

// router.get('/articles/edit/:id', articleCntrl.article_edit_get);
// router.post('/articles/update', articleCntrl.article_update_post);
// router.get('/articles/delete', articleCntrl.article_delete_get);

module.exports = router;
