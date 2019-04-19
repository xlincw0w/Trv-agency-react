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
      submited: false
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

  cleanState = () => {
    this.setState( {searchfield: '', page: 'home', submited: 'false'} )
  }

  render() {
    return ( 
      <div className="Appdiv">
      <Header 
        onPageChange={this.pageChanger}
        cleanState={this.cleanState}
      />
      <Main 
        OnSubmit={this.OnSubmit} 
        searchfield={this.state.searchfield} 
        page={this.state.page} 
        onSearchChange={this.onSearchChange}
        />
      <Footer />
      </div>
    );
  }
}

export default App;



