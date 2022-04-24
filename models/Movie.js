const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, "The field `{PATH}` is required!"],
        maxlength: [200, "The field `{PATH}` must be less than 200"],
        minlength: [1, "The field `{PATH}` must be greater than 200"]
    },
    category: {
        type: String,
        maxlength: 30,
        minlength: 1
    },
    country: {
        type: String,
        maxlength: 50,
        minlength: 1
    },
    year: {
        type: Number,
        min: 1850,
        max: 2300
    },
    imdb_score: {
        type: Number,
        min: 0,
        max: 10
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

module.exports=mongoose.model("movie",MovieSchema)