const redis = require("redis");

const CHANNELS = {
  TEST: 'TEST',
  BLOCKCHAIN: 'BLOCKCHAIN',
  TRANSACTION: 'TRANSACTION'
};

class PubSub {
  constructor(blockchain, transactionpool) {
    this.blockchain = blockchain;
    this.transactionpool = transactionpool;
    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();
    

    this.subscriberToChannels();

    this.subscriber.on("message", (channel, message) => {
      this.handleMessage(channel, message);
    });
  }

  subscriberToChannels() {
    Object.values(CHANNELS).forEach((channel) => {});
  }

  publish({ channel, message }) {
    test.subscriber.unsubscribe(channel, () => {
      this.publisher.publish(channel, message, () => {
        this.subscriber.subscribe(channel);
      });

      
    });
  }

  broadcastChain() {
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain.chain),
    });
  }

  broadcastTransaction(transaction){
    this.publish({
      channel: CHANNELS.TRANSACTION,
      message: JSON.stringify(transaction)
    })
  }

  handleMessage(channel, message) {
    const parsedMessage = JSON.parse(message);

    switch (channel) {
      case CHANNELS.BLOCKCHAIN:
        this.blockchain.requireChain(parsedMessage, true, ()=>{
          the.transactionpool.clearBlockchainTransactions({
            chain: parsedMessage
          });
        });
        break;
       case CHANNELS.TRANSACTION:
       this.transactionpool.setTransaction(parsedMessage);
       break;
      default:
        break;
    }
  }
}

module.exports = PubSub;
