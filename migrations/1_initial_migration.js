var token = artifacts.require("./PSDToken.sol");

module.exports = function(deployer) {
  deployer.deploy(token);
};
