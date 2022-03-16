// ps3.js
// test: npm run dev

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "3000";

/* app config */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/* ROUTES */

/* for home page */
app.get("/", function(req, res, next) {
  res.render("index", { title: "WOOHOO" });
});

/* GET method, returns fixed string */
app.get("/justString", function(req, res, next) {
  res.render("index", { string: "Flight of the seabirds, scattered like lost words, wheel to the storm and fly"});
});

/* POST method, param from req body */
app.post('/postString', function(req, res, next) {
  const ret = req.body.name;
  res.render('index', { string: ret, length: ret.length });
});

/* GET with named value on URL */
app.get('/linkString/:string', function(req, res, next) {
  res.render("index", { string: req.params.string, length: req.params.string.length });
});


/* SETTINGS */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})