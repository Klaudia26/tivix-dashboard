import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
import './style.scss';

class App extends Component {
  state = {
    currentUser: null,
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(user => this.setState({
        currentUser: user
      }));
  }

  render() {
    if (!this.state.currentUser) return 'Loading...';

    return (
      <div className="container">
        <Header name={this.state.currentUser.name} />
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
