var totalBottles = function(input) {
  // initial purchase
  var totalBottles = Math.floor(input / 2);
  var empties = totalBottles;
  var caps = totalBottles;

  while (empties > 1) {
    var newBottles = Math.floor(empties / 2) + Math.floor(caps / 4);
    empties = (empties % 2) + newBottles;
    caps = (caps % 4) + newBottles;
    totalBottles += newBottles;
  }

  return totalBottles;
};

module.exports = totalBottles;

var moneySpent = process.argv[2];
console.log(`TOTAL BOTTLES: ${totalBottles(moneySpent)}`);
