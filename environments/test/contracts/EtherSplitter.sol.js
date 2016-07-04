// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"addressB","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"addressA","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"a","type":"address"},{"name":"b","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    binary: "6060604081815280610150833960a090525160805160008054600160a060020a031990811684179091556001805490911682179055505061010c806100446000396000f3606060405260e060020a600035046312514bba81146100315780634526196e14610068578063fd4e4d751461007a575b005b61002f600435600080548190600160a060020a03168160028504606082818181858883f1935050505091508115156100d757610002565b61008c600154600160a060020a031681565b61008c600054600160a060020a031681565b600160a060020a03166060908152602090f35b6040805184815290517f248dd4076d0a389d795107efafd558ce7f31ae37b441ccb9a599c60868f480d59181900360200190a1505050565b600154604051600160a060020a0391909116908290600286049082818181858883f19350505050905080151561009f5761000256",
    unlinked_binary: "6060604081815280610150833960a090525160805160008054600160a060020a031990811684179091556001805490911682179055505061010c806100446000396000f3606060405260e060020a600035046312514bba81146100315780634526196e14610068578063fd4e4d751461007a575b005b61002f600435600080548190600160a060020a03168160028504606082818181858883f1935050505091508115156100d757610002565b61008c600154600160a060020a031681565b61008c600054600160a060020a031681565b600160a060020a03166060908152602090f35b6040805184815290517f248dd4076d0a389d795107efafd558ce7f31ae37b441ccb9a599c60868f480d59181900360200190a1505050565b600154604051600160a060020a0391909116908290600286049082818181858883f19350505050905080151561009f5761000256",
    address: "",
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
