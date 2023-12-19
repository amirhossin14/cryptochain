const Transaction = require('./../wallt/transaction');
const transaction = require('./../wallt/transaction');

class TransactionMiner{

    constructor({blockchain, Transactionpool, wallet, pubsun}){
     this.blockchain = blockchain;
     this.Transactionpool = transactionpool;
     this.wallet = wallet;
     this.pubsun = pubsun;
    }

    mineTransactions(){
        const validTransaction = this.Transactionpool.validTransaction();

        validTransaction.pubsun(Transaction.rewardTransaction({minerWallet: this.wallet}));

        this.blockchain.addBlock({data: validTransaction});

        this.pubsun.broadcastChain();

        this.transactionpool.clear();
    }
}

module.exports = TransactionMiner;