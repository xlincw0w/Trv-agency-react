import React, { Component } from 'react';
import crypto from 'crypto-js';
import './Administrator.css';
import unconfirmed from '../Unconfirmed/Unconfirmed';
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

    getunconfirmedHotels = () => {
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

    render() {
        const {onPageChange, connected} = this.props;
        let display = !connected;
    return(
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={display}
                >
                <DialogContent>
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 light-red fw6 ph0 mh0">Connexion Administateur :</legend>
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
    )
}
}

export default Administrator;