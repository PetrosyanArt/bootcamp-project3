import axios from "axios";

export default {
  // Gets all beer
  getBooks: function () {
    return axios.get("/api/beers");
  },
  // Gets the beer with the given id
  getBook: function (id) {
    return axios.get("/api/beers/" + id);
  },
  // Deletes the beer with the given id
  deleteBook: function (id) {
    return axios.delete("/api/beers/" + id);
  },
  // Saves a beer to the database
  saveBook: function (bookData) {
    return axios.post("/api/beers", bookData);
  }

};
