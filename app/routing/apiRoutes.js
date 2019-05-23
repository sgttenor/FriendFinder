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

        var matchName = {
            name: "",
            photo: "",
            friendDifference: 2000
        };

       // var matchImage = '';

        var totalDifference = 10000; // Make the initial value big for comparison



        // Examine all existing friends in the list

        for (var i = 0; i < friendsArray.length; i++) {
            currentFriend = friendsArray[i];
             console.log("Current Friend = " + currentFriend);
             totalDifference = 0;



            // Compute differenes for each question

          

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userInput.scores[j];
               totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

               if (totalDifference <= matchName.friendDifference) {
                // Reset the bestMatch to be the new friend.
                matchName.name = friendsArray[i].name;
                matchName.photo = friendsArray[i].photo;
                matchName.friendDifference = totalDifference;
               
              }
              console.log('diff = ' + totalDifference);
            }

           



            // If lowest difference, record the friend match

            if (totalDifference <= matchName.friendDifference) {

            


                
                matchName.name = currentFriend.name;
                matchName.photo = currentFriend.photo;

                matchName.friendDifference = currentFriend.friendDifference;

            }

        }
        // Add new user
        friendsArray.push(userInput);
  // Send appropriate response

        res.json(matchName);
    });
}