import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Searchbox from './Components/Searchbox/Searchbox';
import Owner from './Components/Owner/Owner';
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
      <div className="App">
      <Header onPageChange={this.pageChanger}/>
      {
        this.state.page === 'home' 
        ? <Searchbox onSearchChange={this.onSearchChange} />
        : <Owner />
      }
      <Footer />
      </div>
    );
  }
}

export default App;



