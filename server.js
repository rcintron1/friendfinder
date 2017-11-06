var express = require("express"), parser = require("body-parser"), PORT = 8000;


var app = express();

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });