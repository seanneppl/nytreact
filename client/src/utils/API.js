import axios from "axios";

export default {
  search: function(search, startYear = false, endYear = false){
    let start = "", end = "";

    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
    url += search;
    if (startYear){
      start = "&begin_date=" + startYear + "0101";
    }
    if (endYear) {
      end = "&end_date=" + endYear + "0101";
    }
  
    const api = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    console.log(url + api + start + end);

    return axios.get(url + api + start + end);
  },

    getArticles: function () {
      return axios.get("/api/articles");
    },
    getArticle: function (id) {
      return axios.get("/api/articles/" + id);
    },
    deleteArticle: function (id) {
      console.log("api id",id);
      return axios.delete("/api/articles/" + id);
    },
    saveArticle: function (articleData) {
      return axios.post("/api/articles", articleData);
    }
    
  }

  
  