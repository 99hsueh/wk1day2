var rollDice = process.argv[2];
var diceResult = [];


function diceRoller(sides){
  for(var i = 0; i < rollDice; i++){
    var sides = Math.floor(Math.random() * 6) + 1
    diceResult.push(sides)
  }
  return diceResult;
}


console.log("Rolled " + rollDice + " dice: " + diceRoller());