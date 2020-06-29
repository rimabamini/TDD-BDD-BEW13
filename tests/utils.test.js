const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const { util } = require("chai")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"

// Imagine you just got a job with a MeasureIt.com. They want to create an app that measures everything. You'll need some methods that can return measurements.

// Area should return the area of a rectangle.
// Perimeter should return the perimeter of a rectangle.
// Should return the area of a circle with radius.
// Stretch: Test that any negative widths, breadths, or radii return null
// ========================================================

it("should return the area of a rectangle", function() {
  const area = utils.area(4,10)
  // expect(area).to.be.a.(Number)
  expect(area).to.equal(40)
})

it("should return the area of a triangle", function() {
  const area = utils.triangleArea(4,10)
  expect(area).to.equal(40)
})

it("should return the perimeter of a rectangle", function() {
  const perimeter = utils.perimeter(4, 10)
  expect(perimeter).to.equal(28)
})

it("should return the area of a circle with radius", function() {
  const area = utils.circleArea(3)
  expect(area).to.equal(28.274309999999996)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  const items = utils.getShoppingCart()
  expect(items[0]).to.have.property("name", "apple")
})

it("Should add a new item to the shopping cart", function(){
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", function(){
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  const items = utils.getNumItemsInCart()
  expect(utils.getNumItemsInCart()).to.equal(1)
})

it("Should remove items from cart", function(){
  const item = utils.createItem("apple", 0.99)
  utils.addItemToCart(item)
  expect(utils.getNumItemsInCart()).to.equal(1)
  utils.removeItemFromCart(item)
  expect(utils.getNumItemsInCart()).to.equal(0)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
