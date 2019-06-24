import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.css';

// Definition de la class App
class App extends Component {
  // Constructeur
  constructor() {
    super();
    // Mise en place de State
    this.state = {
      searchfield: '',
      page: 'home',
      submited: false,
      connected: false,
      username: '',
    }
  }

  // Fonction qui s'execute une fois les composant traité
  componentDidMount() {
    // lancement de requete http vers le server
    fetch('http://localhost:3010/')
    .then(response => response.json())
    .then(console.log);
  }

  // Gestionnaire d'événements
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

  disconnect = () => {
    this.setState( {connected: false, username: ''} )
  }

  // Rendement de la class App
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
        disconnect={this.disconnect}
        onSearchChange={this.onSearchChange}
        connected={this.state.connected}
        />
      <Footer />
      </div>
    );
  }
}

export default App;



