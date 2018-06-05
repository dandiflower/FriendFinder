// Your apiRoutes.js file should contain two routes:

var queue = require("../data/friends.js");
var path = require("path");

module.exports = function (app) {

// A GET route with the url / api / friends.This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (request, response) {
        console.log(queue);
        response.json(queue);
    });
// A POST routes / api / friends.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (request, response) {
        var newRes = request.body;
        console.log(newRes);
        queue.push(newRes);
        response.json(newRes);
    });



    // app.delete("/api/friends", function (request, response) {
    //     while (queue.length > 0) {
    //         queue.pop();
    //     }
    //     console.log(queue);
    //     response.json(queue);
    // });

    // app.delete("/api/friends/:id", function (request, response){
    // var index = parseInt(request.params.id);
    // queue.splice(index, 1);
    // })
};
