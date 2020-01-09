const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let reviewValidator = [
    validate({
        validator: 'isLength',
        arguments: [1, 144],
        message: 'Review should be between 1 and 144 characters'
    })
];

const reviewSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    beerName: {
        type: String,
        required: true
    }, 
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true,
        validate: reviewValidator
    }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;

