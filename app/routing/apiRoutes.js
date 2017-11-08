var path = require("path");
var txtPath = function(filename) {return "../public/" + filename;};

// datasources
var friendData = require("../data/friends");
var questions = require("../data/questions");

module.exports = function (app) {
    app.get("/api/friends",function(req, res){
        console.log("app.get => ",txtPath("survey.html"));
        res.json(friendData);
    });
    app.get("/api/questions",function(req, res){
        console.log("api/questions");
        res.json({"questions":questions});
    });
    app.post("/api/survey",function(req, res){
        var newSurvey = req.body;
        console.log(newSurvey);
        friendData.push(newSurvey);
    }
);
    app.get("/api/:name",function (req, res){
        console.log("app.get => ",txtPath("style.css"));
        res.sendFile(path.join(__dirname, txtPath("style.css")));
    });
};