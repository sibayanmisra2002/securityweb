const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Import CORS middleware
const criminalRouter = require("./routes/criminals.routes");
const sequelize = require("./dbConnect");

require("dotenv").config();

const app = express();

// Configure CORS to allow requests from http://localhost:5173
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions)); // Enable CORS with specific options
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

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
