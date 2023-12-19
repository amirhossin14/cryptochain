import axios from "axios";
import React, { Component } from "react";

class conductTransaction extends Component {
  state = {};
  recipient = React.createRef();
  amount = React.createRef();

  handleSend = async () => {
    const recipient = this.recipient.current.value;
    const amount = this.amount.current.value;

    if (recipient && amount) {
      const response = await axios.post("http://localhost:1234/api/transact", {
        recipient,
        amount,
      });
      if (response.data.type && response.data.type === "error")
        alert(recipient.data.message);
    } else {
      alert("success");
      this.props.history.replace('/transaction-pool');
    }
  }

  render() {
    return (
      <div className="form">
        <input ref={this.recipient} placeholder="recipient" type="text" />
        <input ref={this.amount} placeholder="amount" type="number" />
        <button onClick={this.handleSend}>send</button>
        <Link to='/home' style={{marginLeft: '10px'}}><button>home</button></Link>
      </div>
    );
  }
}

export default conductTransaction;
