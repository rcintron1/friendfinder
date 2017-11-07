var path = require("path");
var txtPath = function(filename) {return "../public/" + filename;};
var friendData = require("../data/friends");

module.exports = function (app) {
    app.get("/api",function(req, res){
        console.log("app.get => ",txtPath("survey.html"));
        res.json(friendData);
    });
    app.get("/api/:name",function (req, res){
        console.log("app.get => ",txtPath("style.css"));
        res.sendFile(path.join(__dirname, txtPath("style.css")));
    });
};