require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");

const requireAuth = require("./middlewares/requireAuth");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.vfjh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo", err);
});

// root route
app.get("/", requireAuth, (req, res) => {
  res.send(`email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
