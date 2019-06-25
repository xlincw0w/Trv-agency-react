import React, { Component } from 'react';
import crypto from 'crypto-js';
import './Administrator.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Unconfirmed from '../Unconfirmed/Unconfirmed';

class Administrator extends Component {
    constructor(props){
        super(props)
        this.state = {
        username: '',
        password: '',
        AESEncrytpion: 'secretkey',
        hotels: [],
        connected: this.props.connected,
        }
    }

    componentDidMount() {
        if (this.state.connected) {
            this.getunconfirmedHotels();
        }
    }

    onInput = (variable, event) => {
        switch (variable) {
            case 'username':
                this.setState({ username: event.target.value });
                break;

            case 'password':
                this.setState({ password: event.target.value });
                break;

            default:
                console.log('Erreur input');
        }
    }

    // Envoie de requete vers le server
    connexion = (event) => {
        let password = crypto.AES.encrypt(this.state.password, this.state.AESEncrytpion).toString();
        fetch('http://localhost:3010/admin', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                aesEncryptedPassword: password
            })
        }).then(data => data.json())
        .then(data => this.props.connectionHandler(this.state.username, data))
        .then(this.getunconfirmedHotels())
        .catch(err => console.log('Erreur de connexion'));
    }

    // Récupération des hotels non confirmé 
    getunconfirmedHotels = () => {
        this.setState( { connected: true } )
        fetch('http://localhost:3010/unconfirmed')
        .then(data => data.json())
        .then(data => this.updateHotels(data))
        .then(console.log());
    }

    updateHotels = (data) => {
        this.setState({ hotels: data })
    }

    showHotels = () => {
        if (!this.props.connected) return 'hidden';
        else return '';
    }

    // Déconnexion de l'admin
    disconnect = () => {
        this.setState({ connected: false, hotels: [] });
        this.props.disconnect();
        this.props.onPageChange('home');
    }

    render() {
        const { onPageChange } = this.props;
    return(
        <div>
            <div className="unconfirmedhotels">
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={!this.state.connected}
                    >
                    <DialogContent>
                    <main className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="light-red fw6 ph0 mh0 legendres">Connexion Administateur :</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 light-red">Username</label>
                                <input onChange={this.onInput.bind(this, 'username')} className="pa2 input-reset ba bg-transparent hover-black w-100" type="text"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 light-red">Password</label>
                                <input onChange={this.onInput.bind(this, 'password')} className="pa2 input-reset ba bg-transparent hover-black w-100" type="password"/>
                            </div>
                            
                            </fieldset>
                            <div className="mt3">
                            <button onClick={() => {this.connexion()}} className="b ph3 pv2 input-reset ba b--black bg-transparent light-red grow pointer f6 dib" type="submit" value="Connexion">Connexion</button>
                            </div>
                        </div>
                    </main>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {onPageChange('home')}} color="primary">
                        Exit
                        </Button>
                    </DialogActions>
                </Dialog>
                <Unconfirmed hotels={this.state.hotels} />
            </div>
            <button onClick={() => this.disconnect()} className="sousbord db mt5 mb4 center f4 pointer shadow-5 no-underline white bg-transparent hover-light-red pa3 ba border-box fw8 Souscrire sousbord">
                    => Se Deconnecter
            </button>
        </div>
    )
}
}

export default Administrator;