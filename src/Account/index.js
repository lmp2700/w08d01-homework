import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      inputBox: ''
    }
  }
  handleDepositClick = (e) => {
    e.preventDefault();
    const amount = parseInt((this.inputBox.value), 10)
      this.setState({
        balance: this.state.balance + amount
      })
      // if(this.state.balance <= 0)
      // this.state.balance += ' zero'
    this.inputBox.value = ''
  }
  handleWithdrawClick = (e) => {
    e.preventDefault();
    const amount = parseInt((this.inputBox.value), 10)
          this.setState({
            balance: this.state.balance - amount
          })
    this.inputBox.value = ''
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <button onClick={this.handleDepositClick}>Deposit</button>
        <button onClick={this.handleWithdrawClick}>Withdraw</button>
      </div>
    )
  }
}





export default Account;
