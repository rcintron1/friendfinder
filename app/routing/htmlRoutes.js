var path = require("path");
var txtPath = function(filename) {return "../public/" + filename;};

module.exports = function (app) {
    app.get("/survey",function(req, res){
        console.log("app.get => ",txtPath("survey.html"));
        res.sendFile(path.join(__dirname, txtPath("survey.html")));
    });
    app.get("/style.css",function (req, res){
        console.log("app.get => ",txtPath("style.css"));
        res.sendFile(path.join(__dirname, txtPath("style.css")));
    });
    app.get("/results/:name",function(){
        console.log("results");
        res.sendFile(path.join(__dirname, txtPath("home.html")));
    });
    app.get("*", function (req, res) {
        console.log("app.get => ",txtPath("home.html"));
        res.sendFile(path.join(__dirname, txtPath("home.html")));
    });
};