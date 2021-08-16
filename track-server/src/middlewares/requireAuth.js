// Take incoming request and do some preprocessing

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

// next says if we pass middleware go to next middleware
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization = 'Bearer xxxx'
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: err });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;

    next();
  });
};
