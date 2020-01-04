const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
