var express = require("express");
var app = express();

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(sendViewMiddleware);

function sendViewMiddleware(req, res, next) {
  res.sendView = function(view) {
      return res.sendFile(__dirname + "/views/" + view);
  }
  next();
}

app.get('/', function(req, res) {
  res.sendView('home.html');
});

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
