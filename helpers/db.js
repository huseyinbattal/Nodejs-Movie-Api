const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/movieappdb');

    mongoose.connection.on("open", () => { console.log("Success-MongoDB connected") })
    mongoose.connection.on("error", (err) => {console.log("MongoDB connect failed. Error:",err)})
}