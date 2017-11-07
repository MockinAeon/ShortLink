import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Links} from '../api/links.js';
import LinksList from './LinksList.js';

export default class extends React.Component {
  logout() {
    Accounts.logout();
  }
  onSubmit (e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }
  render () {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.logout.bind(this)}>logout</button>
        <LinksList/>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="test" ref ='url' placeholder="URL"/>
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
