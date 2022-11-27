const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider();

const web3 = new Web3(provider);

const deploy = async () => {
  const dotenv = require("dotenv");
  dotenv.config();

  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[2]);

  console.log(process.env.MNE);
  console.log(process.env.INFURA);

  // try {
  //   const result = await new web3.eth.Contract(JSON.parse(interface))
  //     .deploy({ data: bytecode, arguments: ["Hi there!"] })
  //     .send({ gas: "1000000", from: accounts[2] });

  //   console.log("Contract deployed to", result.options.address);

  // } catch (err) {
  //   console.log(err);

  // }

  provider.engine.stop();
};
deploy();
