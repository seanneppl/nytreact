import express = require('express');
import { Application, Request, Response } from 'express';
import path = require("path");
import mongoose = require('mongoose');
import routes from "./routes";
import cors = require('cors');
import * as dotenv from 'dotenv';

const PORT = process.env.PORT || 3001;
const app: Application = express();
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
app.use(routes);

// Connect to the Mongo DB

const uri: string = process.env.ATLAS_URI || '';

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).catch((err: Error) => console.log(err)); // eslint-disable-line

const connection = mongoose.connection;
connection.once('open', (err: Error) => {
  console.log("MongoDB database connection established successfully");
  if (err) console.log(err);
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req: Request, res: Response) => {
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