import { Request, Response } from 'express';
import axios from 'axios';

// axios.get('https://site.com/', {
//   params: {
//     foo: 'bar'
//   }
// })

const searchController = {
  findAll: function (req: Request, res: Response): void {
    const { query } = req.params;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}`;
    // const start = startYear ? `&begin_date=${startYear}0101` : '';
    // const end = endYear ? `&end_date=${endYear}0101` : '';
    const api = `&api-key=${process.env.NYT_API_KEY}`;
    axios.get(url + api)
      .then(response => res.json(response.data))
      .catch(err => console.log(err));
    // res.status(200).json({ success: "test succeeded" })
  },
};

export default searchController;
