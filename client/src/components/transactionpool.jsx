import React, { Component } from "react";
import axios from "axios";
import Transaction from "./transaction";
import { Link } from "react-router-dom";


class Transactionpool extends Component {
    state = {TransformStream :{}}

    async componentDidMount(){
        const response = await axios.get('http://localhost:1234/api/transaction-pool-map');
        this.setState({transactionMap: response.data});
    }
  state = {};
  render() {
    return <div className="transaction-pool">
      <img src="/images/poolpng" alt="" />
      <link to='/'><button>back to home</button></link>
      {
        Object.values(this.state.transactionMap).map(transaction=>{
          return(
            <div key={transaction.id}>
              <ht/>
              <transaction Transaction={Transaction}/>
            </div>
          )
        })
      }
    </div>;
  }
}

export default Transactionpool;
