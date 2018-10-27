var totalBottles = function(input) {
  // initial purchase
  var totalBottles = Math.floor(input / 2) || 0;

  var bottleObj = {
    totalBottles: totalBottles,
    purchasedBottles: totalBottles,
    fromEmpties: 0,
    fromCaps: 0,
    empties: totalBottles,
    caps: totalBottles
  };

  while (bottleObj.empties > 1) {
    var fromEmpties = Math.floor(bottleObj.empties / 2);
    var fromCaps = Math.floor(bottleObj.caps / 4);
    var newBottles = fromEmpties + fromCaps;
    bottleObj.fromEmpties += fromEmpties;
    bottleObj.fromCaps += fromCaps;
    bottleObj.empties = (bottleObj.empties % 2) + newBottles;
    bottleObj.caps = (bottleObj.caps % 4) + newBottles;
    bottleObj.totalBottles += newBottles;
  }

  return bottleObj;
};

module.exports = totalBottles;

var formatOutput = function(bottleObj) {
  console.log(`TOTAL BOTTLES: ${bottleObj.totalBottles}`);
  console.log(`REMAINING BOTTLES: ${bottleObj.empties}`);
  console.log(`REMAINING CAPS: ${bottleObj.caps}`);
  console.log('TOTAL EARNED:');
  console.log(`  BOTTLES: ${bottleObj.fromEmpties}`);
  console.log(`  CAPS: ${bottleObj.fromCaps}`);
};

var moneySpent = process.argv[2];
formatOutput(totalBottles(moneySpent));
