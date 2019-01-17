var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    
      app.post("/api/friends", function(req, res) {
          console.log("post rou",req.body.userData);
          var bestMatch = {
              name: "",
              photo: "",
              friendDifference: 1000
          };
          console.log(req.body);
          var userData = req.body;
          var userScore = userData.scores;
          console.log (userScore);
          var totalDifference =0;
     
            for (var i = 0; i < friends.length; i++){
                console.log(friends[i]);
                totalDifference =0;
                var currentDifference = 0;
                for(var j = 0; j < friends[i].scores.length; j++){
                        totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));
                }
       /* This part can be outside of the J loop otherwise the total difference gets checked every time*/
                        if(totalDifference <= bestMatch.friendDifference){
                            bestMatch.name = friends[i].name;
                            bestMatch.photo = friends[i].photo;
                            bestMatch.friendDifference=totalDifference;
                        }
            }

            friends.push(userData);
            console.log('near response',bestMatch)
            res.json(bestMatch);
        });
}
            
            //compare each value in an absolute manner and total up a 'difference'
            //Keep track of the lowest difference as you iterate
            //once both iterations are complete you should have the best match 
            //return the object back to the front end so the best match can be displayed in modal
            //Dont forget to push your new 'friend' into the friends array for the next victim
                //Here friends[i] is each friend
                
                    //Here friends[i].scores[j] is each score
                    //req.body.scores[j]

                    // 1-5 = -4 Math.abs(1-5) // +4
