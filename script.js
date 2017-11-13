var answer = prompt("What is your name=");
var randomNumner = Math.floor(Math.random() * 10) + 1;

var i = 0;

while(i < 3) {
    var guess = parseInt(prompt("Enter your guess\nThe correct number is " + randomNumner));
    if(guess === randomNumner) {
        break;
    }
    ++i;
}