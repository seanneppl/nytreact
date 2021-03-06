"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const models_1 = __importDefault(require("../models"));
const uri = process.env.ATLAS_URI || '';
mongoose_1.connect(uri);
const articleSeed = [
    {
        title: "The Dead Zone",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "Lord of the Flies",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "The Catcher in the Rye",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "The Punch Escrow",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "Coraline",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "Code: The Hidden Language of Computer Hardware and Software",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "The Everything Store: Jeff Bezos and the Age of Amazon",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "Total Recall: My Unbelievably True Life Story",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    },
    {
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
        pubdate: "2018-08-02T14:30:04+0000",
        date: new Date(Date.now())
    }
];
models_1.default.Article
    .remove({})
    .then(() => models_1.default.Article.collection.insertMany(articleSeed))
    .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
    .catch((err) => {
    console.error(err);
    process.exit(1);
});
