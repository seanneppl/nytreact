import axios, { AxiosResponse } from "axios";

export interface IArticle {
  title: string
  url: string
  pubdate: string
  date?: string
}

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// const route = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

interface ISearch {
  term: string;
  startYear?: boolean | string;
  endYear?: boolean | string;
}

export default {
  search: function (search: ISearch): Promise<AxiosResponse<any>> {
    const start = search.startYear ? `&begin_date=${search.startYear}0101` : '';
    const end = search.endYear ? `&end_date=${search.endYear}0101` : '';
    const query = `${search.term}${start}${end}`

    return axios.get('/api/search/' + query);
  },

  getArticles: function () {
    return axios.get("/api/articles");
  },
  getArticle: function (id: number) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function (id: string) {
    console.log("api id", id);
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function (articleData: IArticle) {
    console.log(articleData);
    return axios.post("/api/articles", articleData);
  }
}
