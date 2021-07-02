
const Web3 = require("web3")
const {NODE_ETHEREUM} = require('../config');
const web3 = new Web3(NODE_ETHEREUM);

var Web3info = require('web3');
var web3info = new Web3info(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
console.log('function to manipulate contracts');
console.log(Object.keys(web3info.eth))

async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    return latestBlockNumber
}

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
module.exports ={
getBlockNumber,
getNodeInfo,
getGasPrice
}
