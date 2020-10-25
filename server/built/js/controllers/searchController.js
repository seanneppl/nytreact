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
    search: function (req, res) {
        const { query } = req.params;
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}`;
        const api = `&api-key=${process.env.NYT_API_KEY}`;
        axios_1.default.get(url + api)
            .then(response => {
            const articlesData = response.data;
            if (articlesData) {
                res.json(response.data.response.docs);
            }
            else {
                res.json(response.data);
            }
        })
            .catch(err => console.log(err));
    },
};
exports.default = searchController;
