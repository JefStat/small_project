// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"addressB","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"transfer","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"addressA","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"a","type":"address"},{"name":"b","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"adr","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    binary: "60606040818152806101a8833960a090525160805160008054600160a060020a0319908116841790915560018054909116821790555050610164806100446000396000f3606060405260e060020a60003504634526196e81146100315780638a4068dd14610043578063fd4e4d751461007a575b005b61008c600154600160a060020a031681565b61002f600080546002340491908190600160a060020a03168184606082818181858883f19350505050915081151561013257610002565b61008c600054600160a060020a031681565b600160a060020a03166060908152602090f35b60005460408051600160a060020a039290921682526020820185905280517f69ca02dd4edd7bf0a4abb9ed3b7af3f14778db5d61921c7dc7cd545266326de29281900390910190a160408051600154600160a060020a031681526020810185905281517f69ca02dd4edd7bf0a4abb9ed3b7af3f14778db5d61921c7dc7cd545266326de2929181900390910190a1505050565b600154604051600160a060020a0391909116908290859082818181858883f19350505050905080151561009f5761000256",
    unlinked_binary: "60606040818152806101a8833960a090525160805160008054600160a060020a0319908116841790915560018054909116821790555050610164806100446000396000f3606060405260e060020a60003504634526196e81146100315780638a4068dd14610043578063fd4e4d751461007a575b005b61008c600154600160a060020a031681565b61002f600080546002340491908190600160a060020a03168184606082818181858883f19350505050915081151561013257610002565b61008c600054600160a060020a031681565b600160a060020a03166060908152602090f35b60005460408051600160a060020a039290921682526020820185905280517f69ca02dd4edd7bf0a4abb9ed3b7af3f14778db5d61921c7dc7cd545266326de29281900390910190a160408051600154600160a060020a031681526020810185905281517f69ca02dd4edd7bf0a4abb9ed3b7af3f14778db5d61921c7dc7cd545266326de2929181900390910190a1505050565b600154604051600160a060020a0391909116908290859082818181858883f19350505050905080151561009f5761000256",
    address: "0xcf9427efb0ff440e74fc463f50aa2986f482afdd",
    generated_with: "2.0.9",
    contract_name: "EtherSplitter"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("EtherSplitter error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("EtherSplitter error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("EtherSplitter error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("EtherSplitter error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.EtherSplitter = Contract;
  }

})();
