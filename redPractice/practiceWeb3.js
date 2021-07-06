
const Web3 = require("web3")
const {ETHEREUM, ETHEREUM_SOCKET} = require('../config');
const web3 = new Web3(ETHEREUM );
const web3ws = new Web3( new web3.providers.WebsocketProvider(ETHEREUM_SOCKET));
async function getNodeInfo() {
    const nodeInfo = await web3.eth.getNodeInfo()
    console.log(nodeInfo);
    return nodeInfo
}
async function getGasPrice() {
    const gasPrice = await web3.eth.getGasPrice();
    console.log(gasPrice);
    return gasPrice
}
 function getsubscribe() {
     web3.eth.subscribe("logs",{},(error,log)=>{
        if(!error){
            console.log(log);
        }
    })
}
async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    return latestBlockNumber
}
async function getBlock() {
    const blockNumber = await web3.eth.getBlock(12769768)
    return blockNumber
}
async function getBlockforHash() {
    const getBlock = await web3.eth.getBlock('0x124de150f8314d74e29a047531fe3b2c8aea538ccb0b0bdf4abfa96f5e31c91b');
    return getBlock
}
async function  getTransactionFromBlock() {
    const getBlock = await web3.eth. getTransactionFromBlock(12769768,4);
    return getBlock
}
async function getNumberBlocksforEachTransaction(){
    web3.eth.getBlockNumber().then((result)=>{
        console.log(result);
        for (let i = 0; i < 100; i++) {
            web3.eth.getBlock(result - i).then((block)=>{
                console.log(block.number);
            });
        }
    });
}
async function getBlockLatest(){
    const latestBlockNumber = await web3.eth.getBlock('latest')
    return latestBlockNumber.number   
}
async function getBlockPending(){
    const pendingBlockNumber = await web3.eth.getBlock('pending')
    return pendingBlockNumber.number   
}
//--------------------------------------------
 function newBlockHeaders(){
    web3ws.eth.subscribe('newBlockHeaders',(error, blockHeader)=>{
        if (!error) {
            console.log(blockHeader);
    
            return;
        }
        console.error(error);
    })
}
function pendingTransactions(){
    web3ws.eth.subscribe('pendingTransactions',(error, txhash)=>{
        if (!error) {
            web3ws.eth.getTransaction(txhash,(error, tx)=>{
                if(tx != null){
                  console.log(txhash);
                  console.log(web3ws.utils.fromWei(tx.value,'ether'),'ether');
                }
            });
    
            return;
        }
    
        console.error(error);
    })
}
function logs() {
    web3ws.eth.subscribe('logs',(error, log)=>{
        if (!error) {
            console.log(log);
        }
        console.error(error);
})
}
function logsCryptokitties() {
    web3ws.eth.subscribe('logs','0x06012c8cf97bead5deae237070f9587f8e7a266d',
    (error, log)=>{
        if (!error) {
            console.log(log);
        }
    })
}
 async function logsEventFunction() {
    const event = "Transfer(address,address,uint256)";
    const event_hashed = web3ws.utils.sha3(event);
    const result = await web3ws.eth.getPastLogs('logs',{
        address: "0x0D056aE62f05ad4728D280dbb541908832Da66eC",
        topics: [event_hashed]
    })
    return result[0];
}

  
module.exports ={
getBlockNumber,
getBlock,
getNumberBlocksforEachTransaction,
getBlockLatest,
getBlockPending,
getBlockforHash,
getTransactionFromBlock,
newBlockHeaders,
pendingTransactions,
logsEventFunction,
logs,
logsCryptokitties,
getNodeInfo,
getGasPrice,
}
