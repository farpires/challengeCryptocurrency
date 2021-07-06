const Web3 = require('web3');
const NODE_CONFIG = require('../../config');

let web3;
let contractToken;

function initialNode(Node){
    web3 = new Web3(new Web3.providers.WebsocketProvider(NODE_CONFIG[Node]));
    console.log(`connected to ${NODE_CONFIG[Node]}`);
}

async function getTransaction(hash) {
    const transaction = await web3.eth.getTransaction(hash)
    return transaction
}

async function getBalance(wallet){
    const balance = await web3.eth.getBalance(wallet);
    return web3.utils.fromWei(balance);
}

function initialContract(abi, address){
    contractToken = new web3.eth.Contract(abi, address);
     console.log('starting contract');
}

async function getPastTransfer(n) {
    const blockNumber = await web3.eth.getBlockNumber();
    const events = await contractToken.getPastEvents('Transfer',
                {
                    fromBlock: blockNumber-n,
                    toBlock: 'latest'
                }
            )
    return events;
}

function showAllSubscribeLogs() {
    web3.eth.subscribe('logs',(error, log)=>{
        if (!error) {
            console.log(log);
        }
    
        console.error(error);
    })
}

function showTheLogContract(addressContract) {
    web3.eth.subscribe('logs',addressContract,
    (error, log)=>{
        if (!error) {
            console.log(log);
        }
    })
}


async function convertEventFunctionToTopic(eventFunction) {
    const event_hash = await web3.utils.sha3(eventFunction);
    return event_hash;
}

async function showLogATopic(addressContract, event_hashed) {
    const result = await web3.eth.getPastLogs('logs',{
        address: addressContract,
        topics: [event_hashed]
    })
   for (let i = 0; i < result.length; i++) {
       topicArray=result[i].topics;
       if (topicArray.indexOf(event_hashed) === 0) {
           return result[i];
       }
   }
}



module.exports = {
    initialNode,
    getBalance,
    getTransaction,
    initialContract,
    getPastTransfer,
    showAllSubscribeLogs,
    showTheLogContract,
    convertEventFunctionToTopic,
    showLogATopic,
}