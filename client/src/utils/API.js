import axios from "axios";

export default {
  searchBooks: function (search) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + search
    );
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  postBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
