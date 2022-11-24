// contract test code will go here

//functional test
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  //Web3 need to use capital letter because it is a "constructor"
const web3 = new Web3(ganache.provider()); //it is lower case because it is an instance // ganache.provider() is to tell the hosting network we used in the machine 
