contract('EtherSplitter', function(accounts) {
  it("should put 10000 wei in the each account", function(done) {
    var splitter = EtherSplitter.deployed();
    splitter.transfer(20000, {from: accounts[2]}).then(function(o){
        assert.equal(10000, splitter.accountA.balance);
        assert.equal(10000, splitter.accountB.balance);
    });
  });
});
