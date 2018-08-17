const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const ioPORT = 3002;
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const io = require('socket.io')();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreadinglist");


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
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