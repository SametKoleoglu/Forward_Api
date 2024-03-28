const express = require("express");
const cors = require("cors");
require("dotenv").config();
const DbConnect = require("./config/db");
const Auth = require("./routes/auth.js");
const Post = require("./routes/post.js");

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", Auth);
app.use("/", Post);

app.get("/", (req, res) => {
  res.send(`
  <html><head><title>API</title></head><body>
  <div style="text-align:center">
  <h1 style="">Hello World!</h1>
  <h2>This is Node JS API</h2>
  </div>
  </body></html>
  `);
});

DbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
