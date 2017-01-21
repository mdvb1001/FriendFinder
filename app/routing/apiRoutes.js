// set dependency, which is the data in friends.js
var friendsArray = require('../data/friends.js');
module.exports = function (app) {
	// Get the data from the friendsArray
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    });
    // Post data to friendsArray
    app.post('/api/friends', function (req, res) {
    	friendsArray.push(req.body);
    	res.json(friendsArray);
    	console.log(friendsArray);
    });
};
