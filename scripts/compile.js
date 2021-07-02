const path = require('path');
const fs = require('fs');
const solc = require('solc');
const getABI = ()=>{
    const contractPath = path.resolve(__dirname,"../contracts","Inbox.sol");
    const source = fs.readFileSync(contractPath,'utf8');
    const {interface} = solc.compile(source,1).contracts[':Inbox'];
    return interface;
} 
const getByteCode = ()=>{
    const contractPath = path.resolve(__dirname,"../contracts","Inbox.sol");
    const source = fs.readFileSync(contractPath,'utf8');
    const {bytecode} = solc.compile(source,1).contracts[':Inbox'];
    return bytecode;
} 
module.exports = {
    getABI,
    getByteCode,
}