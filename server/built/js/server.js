"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes_1 = __importDefault(require("./routes"));
const cors = require("cors");
const dotenv = __importStar(require("dotenv"));
const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();
// const ioPORT = 3002;
// const io = require('socket.io')();
// Define middleware here
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Define API routes here
// Add routes, both API and view
app.use(routes_1.default);
// Connect to the Mongo DB
const uri = process.env.ATLAS_URI || '';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).catch((err) => console.log(err)); // eslint-disable-line
const connection = mongoose.connection;
connection.once('open', (err) => {
    console.log("MongoDB database connection established successfully");
    if (err)
        console.log(err);
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
process.on('SIGINT', () => {
    console.log('kill process');
    process.exit(1);
});
// Socket.io connections https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
//In progress
// io.on('connection', (client) => {
//   client.on('save', (save) => {
//     client.emit("save", save);
//     console.log('saved ', save);
//   });
// });
// io.listen(ioPORT);
