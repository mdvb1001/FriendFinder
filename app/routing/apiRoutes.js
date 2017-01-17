var friendsArray = require('../data/friends.js');
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    });
    app.post('/api/friends', function (req, res) {
    	friendsArray.push(req.body);
    	res.json(friendsArray);
    	console.log(friendsArray);
    });
    // app.post("/api/friends", function (req, res) {
    //     var friend = req.body;
    //     friend.routeName = friend.name.replace(/\s+/g, "").toLowerCase();
    //     console.log(friend);
    //     characters.push(friend);
    //     res.json(friend);
    // });
};