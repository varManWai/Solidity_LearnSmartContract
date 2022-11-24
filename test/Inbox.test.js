// contract test code will go here

//functional test
const assert = require("assert");
const ganache = require("ganache-cli");
const { beforeEach } = require("mocha");
const Web3 = require("web3"); //Web3 need to use capital letter because it is a "constructor"
const web3 = new Web3(ganache.provider()); //it is lower case because it is an instance // ganache.provider() is to tell the hosting network we used in the machine

beforeEach(() => {
  // Get a list of all account
  web3.eth.getAccounts().then((fetchedAccounts) => {
    console.log(fetchedAccounts);
  }); // must be an async

  // Use one of those accounts to deploy
  // the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    
  });
});

// class Car {
//   park() {
//     //method 1
//     return "stopped";
//   }

//   drive() {
//     //method 2
//     return "vroom";
//   }
// }

// let car;

// beforeEach(() => { //run before the describe
//   car = new Car();
// });

// describe("Car", () => {
//   //Car just the name
//   it("can drive", () => {
//     //can drive also just a words
//     assert.equal(car.park(), "stopped"); // compare the car.park() return the value same as the second para
//   });

//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });
