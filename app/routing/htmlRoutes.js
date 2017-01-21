var path = require('path');
module.exports = function (app) {
    // Routes
 		// To survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // To list of friends in json format
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "/../data/friends.js"));
    });
    // For home page, user can input anything that isn't the above
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });


};
