const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "museum office diet victory reflect clump exact again you deal outdoor slender",
  "https://goerli.infura.io/v3/aa90d83a5ef743cdb1f5e88f373ab881"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  try {
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ["Hi there!"] })
      .send({ gas: "1000000", from: accounts[2] });

    console.log("Contract deployed to", result.options.address);
  
  } catch (err) {
    console.log(err);

  }

  provider.engine.stop();
};
deploy();
