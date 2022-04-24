var express = require("express");
var router = express.Router();

var MovieModel = require("../models/Movie")

router.get("/top10", function (req, res, next) {
    MovieModel.find().limit(10).sort({imdb_score:-1})
        .then((movie) => {
            if(!movie) next({message:"The movie was not found.",status:404})
            res.json(movie)
        })
        .catch((err) => { res.json(err) })
})

router.get("/:movieId", function (req, res, next) {
    MovieModel.findById(req.params.movieId)
        .then((movie) => {
            if(!movie) next({message:"The movie was not found.",status:404})
            res.json(movie)
        })
        .catch((err) => { res.json(err) })
})

router.get("/", function (req, res, next) {
    MovieModel.find()
        .then((movieList) => { res.json(movieList) })
        .catch((err) => { res.json(err) })
})

// router.post("/",function (req,res) {
//     const newMovie = new MovieModel({
//         title: req.body.title,
//         imdb_score: req.body.imdb_score,
//         category: req.body.category,
//         country: req.body.country,
//         year:req.body.year
//     })

//     newMovie.save((err,data) => {
//         if (err) { res.json(err) } 
//         res.json(data);
//     })
// })

router.post("/", function (req, res) {

    const newMovie = new MovieModel(req.body)

    newMovie.save()
        .then((movie) => { res.json(movie) })
        .catch((err) => { res.json(err) })
})

router.put("/:movieId", function (req, res, next) {
    MovieModel.findByIdAndUpdate(req.params.movieId,req.body,{new:true})
        .then((movie) => {
            if(!movie) next({message:"The movie was not found.",status:404})
            res.json(movie)
        })
        .catch((err) => { res.json(err) })
})

router.delete("/:movieId", function (req, res, next) {
    MovieModel.findByIdAndRemove(req.params.movieId)
        .then((movie) => {
            if(!movie) next({message:"The movie was not found.",status:404})
            res.json(movie)
        })
        .catch((err) => { res.json(err) })
})




module.exports = router;