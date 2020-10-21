"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const express_1 = require("express");
const api_1 = __importDefault(require("./api"));
const router = express_1.Router();
router.use("/api", api_1.default);
router.use(function (req, res) {
    res.sendFile(path_1.join(__dirname, "../client/build/index.html"));
});
exports.default = router;
