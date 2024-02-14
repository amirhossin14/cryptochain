import React, { Component } from "react";
import axios from "axios";
import Transaction from "./transaction";
import { Link } from "react-router-dom";

class Transactionpool extends Component {
  state = { TransformStream: {} };


  async gertTransactionns(){
    const response = await axios.get(`${document.location.origin}/api/transaction-pool-map`);
    this.setState({ transactionMap: response.data });
  }

   componentDidMount() {
    this.gertTransactionns();
    this.getTransactionsInterval = setTnterval(()=>{
      this.gertTransactionns();
    },10000)
  }

  componentWillUnmount(){
    clearInterval(this.getTransactionsInterval);
  }
  handleMine = async ()=>{
    await axios.get(`${document.location.origin}/api/mine-transactions`);
    alert('success');
    this.props.history.push('/');
  }
  state = {};
  render() {
    return (
      <div className="transaction-pool">
        <img src="/images/pool.png" alt="" />
        <Link to="/"><button>back to home</button></Link>
        <button onClick={this.handleMine}>mine transaction</button>
        {Object.values(this.state.transactionMap).map((transaction) => {
          return (
            <div key={transaction.id}>
              <ht />
              <transaction Transaction={Transaction} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Transactionpool;
