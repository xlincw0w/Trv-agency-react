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

  onSearchChange = (event) => {
    this.setState( {searchfield: event.target.value} )
    console.log(this.state.searchfield);
  }

  OnSubmit = (event) => {
    this.setState( {submited: true} )
  }

  pageChanger = (input) => {
    this.setState( {page: input} )
  }

  render() {
    return ( 
      <div className="Appdiv">
      <Header onPageChange={this.pageChanger} />
      <Main page={this.state.page} onSearchChange={this.onSearchChange}/>
      <Footer />
      </div>
    );
  }
}

export default App;



