"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios.get('https://site.com/', {
//   params: {
//     foo: 'bar'
//   }
// })
const searchController = {
    findAll: function (req, res) {
        const { query } = req.params;
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}`;
        // const start = startYear ? `&begin_date=${startYear}0101` : '';
        // const end = endYear ? `&end_date=${endYear}0101` : '';
        const api = `&api-key=${process.env.NYT_API_KEY}`;
        axios_1.default.get(url + api)
            .then(response => res.json(response.data))
            .catch(err => console.log(err));
        // res.status(200).json({ success: "test succeeded" })
    },
};
exports.default = searchController;
