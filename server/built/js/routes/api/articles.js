"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articlesController_1 = __importDefault(require("../../controllers/articlesController"));
const router = express_1.Router();
router.route("/")
    .get(articlesController_1.default.findAll)
    .post(articlesController_1.default.create);
router
    .route("/:id")
    .get(articlesController_1.default.findById)
    .put(articlesController_1.default.update)
    .delete(articlesController_1.default.remove);
exports.default = router;
