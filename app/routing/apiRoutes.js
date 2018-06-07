// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.The apiRoutes.js file should contain two routes:

var friendData = require("../data/friends");
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {

// A GET route with the url / api / friends.This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (request, response) {
        console.log(friendData);
        response.json(friendData);
    });
// A POST routes / api / friends.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (request, response) {
        var newFriend = request.body;
        // console.log(newFriend);
        
        // response.json(newFriend);
        var matchingFriend;

        //math to compare here ; loop through friendData and compare newFriend
        function compare(obj, targetObj) {
            var totalDiff = 0;  
            for (var i = 0; i < 10; i++) {
                totalDiff += Math.abs(parseInt(obj.scores[i]) - parseInt(targetObj.scores[i]));
            }
            return totalDiff;
        }

        var minIndex = 0;
        var minDiff = 50;
        for (var i=0; i < friendData.length; i++) {
            var diff = compare(newFriend, friendData[i]);
            if (diff < minDiff){
                minDiff = diff;
                minIndex = i;
            }
        }
        matchingFriend = friendData[minIndex];
        // console.log(matchingFriend);

        friendData.push(newFriend);
        // response.json(matchingFriend);
        response.json(newFriend);

        
    });


};
