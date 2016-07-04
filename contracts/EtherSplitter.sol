contract EtherSplitter {
    address public addressA;
    address public addressB;

    event Transfer(address adr, uint value);
    
    function EtherSplitter(address a, address b) {
        addressA = a;
        addressB = b;
    }

    function transfer() {
        var halfValue = msg.value/2;
        var sendA = addressA.send(halfValue);
        if (!sendA) throw;
        var sendB = addressB.send(halfValue);
        if (!sendB) throw;
        Transfer(addressA, halfValue);
        Transfer(addressB, halfValue);
    }
}

