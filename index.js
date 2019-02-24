const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoscape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("list", { name: "Cris " });
});

app.listen(3000);
