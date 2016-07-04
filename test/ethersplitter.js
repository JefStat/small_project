contract('EtherSplitter', function(accounts) {
  it('should put 10000 wei in the each account', function(done) {
    var splitter = EtherSplitter.deployed();
    console.log('Hello accounts '+JSON.stringify(accounts));
    console.log('Account[0] '+JSON.stringify(web3.eth.getBalance(accounts[0])));
    var initialValueAccount0 = web3.eth.getBalance(accounts[0]);
    var initialValueAccount1 = web3.eth.getBalance(accounts[1]);
    splitter.transfer({value: 20000, from: accounts[2]}).then(function(o){
        assert.equal('10000', web3.eth.getBalance(accounts[0]).minus(initialValueAccount0).toString());
        assert.equal('10000', web3.eth.getBalance(accounts[1]).minus(initialValueAccount1).toString());
    }).then(done).catch(done);
  });
});
