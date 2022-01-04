const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/static", express.static("public"));

app.use("/", require("./routes/index.routes"));
app.use("/olap", require("./routes/olap.routes"));

app.use((req, res) => {
  return res.send("Page not found");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
