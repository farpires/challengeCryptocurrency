const {
    TransactionHash,
    walletExample,
    abi,
    address,
} = require('./config/resource');

const {
    initialNode,
    getBalance,
    getTransaction,
    initialContract,
    getPastTransfer,
    showAllSubscribeLogs,
    showTheLogContract,
    convertEventFunctionToTopic,
    showLogATopic,
} = require('./src/service/scanner');

const {getABI,getByteCode} = require('./src/scripts/compile');

(async ()=>{
    /**
     * You can choose in:
     * POLYGON                          'polygon infura '
     * POLYGON_SOCKET                   'wss://ws-mainnet.matic.network/'
     * ETHEREUM                         'cloudflare'
     * ETHEREUM_SOCKET                  'rinkeby-infura '
     */
    initialNode('POLYGON_SOCKET');
    
    /**
     * 
     * parameter : wallet hash  
     */
    console.log(await getBalance(walletExample));
    
    /**
     * 
     * parameter : transaction hash
     */
    console.log(await getTransaction(TransactionHash));

    /**
     * 
     * ABI
     */
    console.log(abi);

    /**
     * 
     * ADDRESS
     */
    console.log(address);

    /**
     * 
     * token: Quickswap
     * parameter 1: ABI
     * parameter 2: ADDRESS
     */
    initialContract(abi,address);


    /**
     * 
     * event Trnafer 
     * token: Quickswap
     * parameter : number "last contract transfer"
     */
     console.log(await getPastTransfer(10));
    


    //---------------------------------LOGS TOPIC 

    /**
     * 
     * show All Subscribe Logs
     */
    await showAllSubscribeLogs();


    /**
     * 
     * token: Quickswap
     * show The Log Contract
     * parameter: address contract
     */
     await showTheLogContract(address);

    /**
     * 
     * event Transfer
     * parameter: event to convert 
     */
    const transferDecodeado = await convertEventFunctionToTopic("Transfer(address,address,uint256)");
    console.log(transferDecodeado);

    /**
     * 
     * parameter 1: address contract
     * parameter 2: result of convertEventFunctionToTopic function
     */
     console.log(await showLogATopic(address,transferDecodeado))

     /**
      * event Approval
      */
     const approvalDecodeado = await convertEventFunctionToTopic("Approval(address,address,uint256)");
     console.log(approvalDecodeado);
     console.log(await showLogATopic(address,approvalDecodeado));

    // get an ABI and a Bytecode
    // console.log(await getABI());
    // console.log(await getByteCode());

})();
