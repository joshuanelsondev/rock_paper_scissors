function computerPlay() {
   play = Math.floor(Math.random() * 3);
   if (play == 0) {
       return console.log("Rock");
   } else if (play == 1) {
       return console.log("Paper");
   } else {
       return console.log("Scissors");
   }
}