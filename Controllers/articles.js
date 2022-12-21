// // Require Model
const Article = require("../Models/Article");
const Pet =require("../Models/Pet") ////added by yousef

// HTTP GET - Article Index
exports.article_index_get= (req,res)=> {
    res.render("article/index")
    }

// //Require moment
// const moment = require ////added by yousef
// // HTTP GET - Adding Article
// exports.article_create_get= (req,res)=> {
//     res.render("articles/add");
//     // Pet.find() 
//     // .then((pets) => {
//     //     res.render("article/add", {pets})
//     // })
//     // .catch(err => {
//     //     console.log(err)
//     // })
//     //from line 10 to 16 add by yousef
// }

// // HTTP POST - Creating a new article
// exports.article_create_post= (req,res)=> {
//     let article= new Article(req.body);

//     article.save()
//     .then(() => {
//         req.body.pet.forEach(pet => {
//             Pet.findById(pet, (err, pet) => {
//                 pet.article.push(article);
//                 pet.save()
//             })
//         }) ////from line 26 to 31 added by yousef
//         res.redirect('/article/index');
//     })

//     .catch((err) => {
//         console.log(err);
//         res.send("Please meow again later");
//     });
// }

// // HTTP GET - Article Index
// exports.article_index_get= (req,res)=> {
//     res.render("article/index")
//     }

// // HTTP GET - Article by ID
// exports.article_details_get= (req,res)=> {
//     Article.findById(req.query.id)
//    .then(article => {
//         res.render("article/details", {article}) ///needs to add moment with article {article, moment} yousef
//     })
//     .catch(err => {
//         console.log(err);
//   })
// }

// // HTTP GET - Article edit form
// exports.article_edit_get= (req,res)=> {
//     Article.findById(req.query.id)
//     .then(article => {
//     res.render("Articles/edit", {article})
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     }

// // HTTP POST - Article update
// exports.article_update_post= (req,res)=> {
//     Article.findbyIdAndUpdate(req.body.id, req.body.title, req.body)
//     .then(()=> {
//         res.redirect('/article/index');
//     })
//     .catch(err=> {
//         console.log(err);
//     });
// }

// // HTTP GET - Article delete form
// exports.article_delete_get= (req,res)=> {
//     Article.findByIdAndDelete(req.query.id)
//     .then(() => {
//         res.redirect("/article/index");
//     })
//     .catch(err => {
//         console.log(err)
//     });
// };

// HTTP GET - My Articles (Display Current User Articles)
exports.article_myarticles_get = (req, res) => {
    // console.log(req.user._id)
    User.findById(req.user._id).populate('article')
    .then(user => {
        console.log(user)
        res.render("myarticles/index", {articles: user.article})
    })
    .catch(err => {
        console.log(err);
    })
}