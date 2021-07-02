const {getBlockNumber,getNodeInfo,getGasPrice} = require('./red/practiceWeb3');
const {getTransaction, getAccounts, getTransactionReceipt} = require('./red/polygonscan');
const {getABI,getByteCode} = require('./scripts/compile');

(async ()=>{
    // Practice loudflare-eth ethereum
     getBlockNumber()
     getNodeInfo()
     getGasPrice()
    
     // Practice polygon-mainnet.infura.io Polygon
    console.log(await getTransaction());
    console.log(await getTransactionReceipt());
    console.log(await getAccounts());

    // get an ABI and a Bytecode
    // console.log(await getABI());
    // console.log(await getByteCode());
})();