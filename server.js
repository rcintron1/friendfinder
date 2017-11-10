var express = require("express"), bodyParser = require("body-parser"), PORT = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(process.env.PORT || 5000, function() {
    console.log("App listening on PORT: " + PORT);
  });