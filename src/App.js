import React, { Component } from 'react';
import logo from './ga.png';
import Account from './Account';

class App extends Component {
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
    const newBalance = this.state.balance + amount
      this.setState({
        balance: newBalance
      })
    this.inputBox.value = ''
  }
  handleWithdrawClick = (e) => {
    e.preventDefault();
    const amount = parseInt((this.inputBox.value), 10)
    const newBalance = this.state.balance - amount
          this.setState({
            balance: newBalance
          })
    this.inputBox.value = ''
  }
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
          <div>
            <Account name="Checking"/>
            <Account name="Savings"/>
          </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;

