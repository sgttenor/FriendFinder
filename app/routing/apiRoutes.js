var friendsArray = require("../data/friends.js");

console.log("friends", friendsArray)

module.exports = function (app) {

    app.get("/api/friendsArray", function (req, res) {
        console.log("get api/friends")
        res.json(friendsArray)
        ///
    });

    app.post("/api/friendsArray", function (req, res) {

        var userInput = req.body;

        // console.log('userInput = ' + JSON.stringify(userInput));



        var userResponses = userInput.scores;

        // console.log('userResponses = ' + userResponses);



        // Compute best friend match

        var matchName = '';

        var matchImage = '';

        var totalDifference = 10000; // Make the initial value big for comparison



        // Examine all existing friends in the list

        for (var i = 0; i < friendsArray.length; i++) {

            // console.log('friend = ' + JSON.stringify(friends[i]));



            // Compute differenes for each question

            var diff = 0;

            for (var j = 0; j < userResponses.length; j++) {

                diff += Math.abs(friendsArray[i].scores[j] - userResponses[j]);

            }

            // console.log('diff = ' + diff);



            // If lowest difference, record the friend match

            if (diff < totalDifference) {

                // console.log('Closest match found = ' + diff);

                // console.log('Friend name = ' + friends[i].name);

                // console.log('Friend image = ' + friends[i].photo);



                totalDifference = diff;

                matchName = friendsArray[i].name;

                matchImage = friendsArray[i].photo;

            }

        }
        // Add new user
        friendsArray.push(userInput);
  // Send appropriate response

        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
    });
}