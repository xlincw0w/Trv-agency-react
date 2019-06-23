import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: '',
      page: 'home',
      submited: false,
      connected: false,
      username: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/')
    .then(response => response.json())
    .then(console.log);
  }

  onSearchChange = (event) => {
    this.setState( {searchfield: event.target.value} )
  }

  OnSubmit = (event) => {
    this.pageChanger('result');
  }

  pageChanger = (input) => {
    this.setState( {page: input} )
  }

  connectionHandler = (username, data) => {
    if (data.connected) this.setState({ connected: true, username: username });
    else alert('Invalid password');
  }

  cleanState = () => {
    this.setState( {searchfield: '', page: 'home', submited: 'false'} )
  }

  render() {
    return ( 
      <div className="Appdiv bg-black-30">
      <Header 
        onPageChange={this.pageChanger}
        cleanState={this.cleanState}
        connected={this.state.connected}
        username={this.state.username}
      />
      <Main 
        OnSubmit={this.OnSubmit} 
        searchfield={this.state.searchfield} 
        page={this.state.page} 
        onPageChange={this.pageChanger}
        connectionHandler={this.connectionHandler}
        onSearchChange={this.onSearchChange}
        connected={this.state.connected}
        />
      <Footer />
      </div>
    );
  }
}

export default App;



