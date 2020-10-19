const axios = require('axios');

// axios.get('https://site.com/', {
//   params: {
//     foo: 'bar'
//   }
// })

module.exports = {
  findAll: function (req, res) {
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
