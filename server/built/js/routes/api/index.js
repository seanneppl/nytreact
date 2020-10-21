"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articles_1 = __importDefault(require("./articles"));
const search_1 = __importDefault(require("./search"));
const router = express_1.Router();
router.use("/articles", articles_1.default);
router.use("/search", search_1.default);
exports.default = router;
