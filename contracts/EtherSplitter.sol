contract EtherSplitter {
    address public addressA;
    address public addressB;

    event Transfer(uint value);
    
    function EtherSplitter(address a, address b) {
        addressA = a;
        addressB = b;
    }

    function transfer(uint _value) {
        var sendA = addressA.send(_value/2);
        if (!sendA) throw;
        var sendB = addressB.send(_value/2);
        if (!sendB) throw;
        Transfer(_value);
    }
}
