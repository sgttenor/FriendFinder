var friendsArray = require("../data/friends.js");

console.log("friends", friendsArray)

module.exports = function (app) {

    app.get("/api/friendsArray", function (req, res) {
        console.log("get ruta api/friends")
        res.json(friendsArray)
        ///
    });

    app.post("/api/friends", function (req, res) {
        console.log("post ruta api/friends");
        var b = req.body;
        console.log(b);

        var total = 0;
        for (let i = 0; i < friendsArray.length; i++) {

            for (let y = 0; y < 10; y++) {
                console.log("este score ", + friendsArray[i].scores[y]);
                console.log(b[0].score)
                total = Math.abs(b[0])


            }

        }
        return res;
        ///
    });
}