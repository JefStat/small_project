var buildConfig = {
  "index.html": "index.html",
  "app.js": [
    "javascripts/app.js"
  ],
  "app.css": [
    "stylesheets/app.css"
  ],
  "images/": "images/"
};

var rpcConfig = {
  host: "localhost",
  port: 8546
};

var DefaultBuilder = require("truffle-default-builder");
var Pudding = require("ether-pudding");
var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider(
    "http://" + rpcConfig.host + ":" + rpcConfig.port));

module.exports = {
  build: function (options, callback) {
    var destination = options.contracts_directory;
    var EtherSplitter = require(destination + "/EtherSplitter.sol.js");
    EtherSplitter.setProvider(web3);
    EtherSplitter.load(Pudding);

    // Deploy a EtherSplitter with constructor parameter
    EtherSplitter.new(
        web3.personal.listAccounts[0],
        web3.personal.listAccounts[1],
        { from: web3.eth.coinbase, gas: 3000000 }
    ).catch(function (e) {
      console.log('Failed to deploy EtherSplitter');
      callback(e);
    }).then(function (deployedEtherSplitter) {
      // Save the address in the file to be deployed
      EtherSplitter.address = deployedEtherSplitter.address;
      console.log('EtherSplitter: ' + deployedEtherSplitter.address);
      Pudding.save({'EtherSplitter': EtherSplitter}, destination);
    }).then(function () {
      // carry on with the default builder
      var defaultBuilder = new DefaultBuilder(buildConfig, 'build', {});
      defaultBuilder.build(options, callback);
    });
  },
  deploy: [
    "MetaCoin",
    "ConvertLib",
    "EtherSplitter"
  ],
  rpc: rpcConfig
};
