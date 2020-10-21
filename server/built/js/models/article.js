"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// const Schema = mongoose.Schema;
const articleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    pubdate: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const Article = mongoose_1.model("Article", articleSchema);
exports.default = Article;
