import { Request, Response } from 'express';
import axios from 'axios';

// axios.get('https://site.com/', {
//   params: {
//     foo: 'bar'
//   }
// })

const searchController = {
  search: function (req: Request, res: Response): void {
    const { query } = req.params;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}`;
    const api = `&api-key=${process.env.NYT_API_KEY}`;
    axios.get(url + api)
      .then(response => res.json(response.data))
      .catch(err => console.log(err));
  },
};

export default searchController;
