var assert = require("chai").assert;
var totalBottles = require("../poppin-bottles");

describe("Poppin' Bottles", () => {

  it('should return 15 when investing $10', () => {
    var input = 10;
    var result = totalBottles(input).totalBottles;
    assert.equal(result, 15);
  });

  it('should return 35 when investing $20', () => {
    var input = 20;
    var result = totalBottles(input).totalBottles;
    assert.equal(result, 35);
  });

  it('should return 55 when investing $30', () => {
    var input = 30;
    var result = totalBottles(input).totalBottles;
    assert.equal(result, 55);
  });

  it('should return 75 when investing $40', () => {
    var input = 40;
    var result = totalBottles(input).totalBottles;
    assert.equal(result, 75);
  });

});