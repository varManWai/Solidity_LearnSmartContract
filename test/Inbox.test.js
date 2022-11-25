// contract test code will go here

//functional test
const assert = require("assert");
const ganache = require("ganache-cli");
const { beforeEach } = require("mocha");
const Web3 = require("web3"); //Web3 need to use capital letter because it is a "constructor"
const web3 = new Web3(ganache.provider()); //it is lower case because it is an instance // ganache.provider() is to tell the hosting network we used in the machine
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all account
  accounts = await web3.eth.getAccounts(); // must be async

  // Use one of those accounts to deploy
  // the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] }) // argument is the parameter of the function in the Inbox.sol, the initialMessage
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address); //looking for the contract address
  });

  it("has default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "Hi there!");
  });

  it("can change the message", async () => {
    await inbox.methods.setMessage("Bye there!").send({from: accounts[0]}); //front account 0 send the gas to complete the setting
    const message = await inbox.methods.message().call();
    assert.equal(message, "Bye there!");
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
