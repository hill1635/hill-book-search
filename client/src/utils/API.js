import axios from "axios";

export default {
  searchBooks: function (search) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + search
    );
  },
};
