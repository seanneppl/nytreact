const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const cors = require('cors');
// const ioPORT = 3002;
// const io = require('socket.io')();

require('dotenv').config();

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
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).catch(err => console.log(err));

const connection = mongoose.connection;
connection.once('open', (err) => {
  console.log("MongoDB database connection established successfully");
}).catch(err => console.log(err));

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