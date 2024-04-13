var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const criminalRouter = require("./routes/criminals.routes");
require("dotenv").config();

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

// configure sequelize connection
const sequelize = require("./dbConnect");
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// sequelize
//   .sync() // Set force to true to drop existing tables
//   .then(() => {
//     console.log("Database synced successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to sync database:", err);
//   });

app.get("/", (req, res) => {
  console.log(req.cookies, "cookies");
  res.send("hello");
});

app.use("/api/people", criminalRouter);

app.listen(port, () => {
  console.log(`Started listening on PORT ${port}`);
});
