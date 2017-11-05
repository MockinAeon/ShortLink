import React from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class extends React.Component {
  logout() {
    Accounts.logout();
  }
  render () {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.logout.bind(this)}>logout</button> 
      </div>
    );
  }
}
