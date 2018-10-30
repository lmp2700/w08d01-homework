import React, {Component} from 'react';

class Zero extends Component {
    render() {
            const balanceClass = 'balance'
            if(this.state.balance === 0) {
            balanceClass += ' zero';
            }
        }

export default Zero;