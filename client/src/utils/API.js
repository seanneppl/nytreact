import axios from "axios";

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// const route = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

export default {
  search: function (search, startYear = false, endYear = false) {
    // const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}`;
    const start = startYear ? `&begin_date=${startYear}0101` : '';
    const end = endYear ? `&end_date=${endYear}0101` : '';
    // const api = `&api-key=${process.env.REACT_APP_NYT_API_KEY}`;

    // const query = `${url}${start}${end}${api}`
    const query = `${search}${start}${end}`

    return axios.get('/api/search/' + query);
  },

  getArticles: function () {
    return axios.get("/api/articles");
  },
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function (id) {
    console.log("api id", id);
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function (articleData) {
    console.log(articleData);
    return axios.post("/api/articles", articleData);
  }
}
