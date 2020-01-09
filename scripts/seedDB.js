const mongoose = require("mongoose");
const db = require("../models");

// This file empties the reviews collection and inserts the dummy reviews below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dummyReviews"
);

const beerSeed = [
  {
    username: "renns",
    date: new Date(Date.now()),
    beerName: "'Murican Pilsner",
    beerID: 1,
    rating: 10,
    review:
        "So delicious. Really love this beer and can't wait to drink it all the time. Hope it doesn't get me in trouble!"
  },
  {
    username: "booms",
    date: new Date(Date.now()),
    beerName: "'Murican Pilsner",
    beerID: 1,
    rating: 2,
    review:
        "This was disgusting and I hate it forever."
  },
  {
    username: "sundial",
    date: new Date(Date.now()),
    beerName: "'Murican Pilsner",
    beerID: 1,
    beerStyle: "American Pilsner",
    rating: 7,
    review:
        "Pretty damn tasty! Would recommend, especially if on tap."
  },
  {
    username: "winston",
    date: new Date(Date.now()),
    beerName: "'Murican Pilsner",
    beerID: 1,
    rating: 5,
    review:
        "Forgetful but fine."
  },
  {
    username: "Newbie",
    date: new Date(Date.now()),
    beerName: "'Murican Pilsner",
    beerID: 1,
    rating: 1,
    review:
        "Dispicable. Nothing short of horrible. Left me bed-ridden for years."
  }
];

db.Beer
  .remove({})
  .then(() => db.Beer.collection.insertMany(beerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
