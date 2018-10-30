import React, { Component } from 'react';


class Account extends Component {
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <button onClick={this.handleDepositClick}>Deposit</button>
        <button onClick={this.handleWithdrawClick}>Withdraw</button>
      </div>
    )
  }
}

export default Account;
