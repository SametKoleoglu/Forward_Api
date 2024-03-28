const mongoose = require("mongoose");

const DbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("database connected"))
    .catch((err) => {
      throw new Error(err.message);
    });
};

module.exports = DbConnect;
