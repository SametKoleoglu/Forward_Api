const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(",")[1];

    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, process.env.SECRET_TOKEN);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
