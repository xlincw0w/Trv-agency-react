import React, {Component} from 'react';
import './Reserve.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';



class Reserve extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email:'',
            date_debut:'',
            date_fin:'',
            type_chambre:'',
        }
    }

    onInput = (variable, event) => {
        switch (variable) {
            case 'nom':
                this.setState( { nom: event.target.value} );
                break;
          
            case 'prenom':
                this.setState( { prenom: event.target.value} )
                break;
          
            case 'mail':
                this.setState( { email: event.target.value} )
                break;
          
            case 'dd':
                this.setState( { date_debut: event.target.value} )
                break;
          
            case 'df':
                this.setState( { date_fin: event.target.value} )
                break;
          
            case 'tc':
                this.setState( { type_chambre: event.target.value} )
                console.log(this.state.type_chambre);
                break;

            default :
                console.log('Error !');
            }
        }

        whitify = (variable) => {
            const nom_rg = /^[A-Za-z]+$/;
            const prenom_rg = /^[A-Za-z ]+$/;
            const email_rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            const styleToChange = {color: 'transparent'};
            const defaultStyle = {color: 'rgb(255,0,0)'};
    
            switch (variable) {
                case 'nom':
                    if(!nom_rg.test(this.state.nom)) { return styleToChange; }
                    return defaultStyle;
        
                case 'prenom':
                    if(!prenom_rg.test(this.state.prenom)) { return styleToChange; } 
                     return defaultStyle;
              
                case 'email':
                    if(!email_rg.test(this.state.email)) { return styleToChange; } 
                    return defaultStyle;
              
                default :
                    console.log('Error !');
            }
        }

    registerToDBReservation = (event) => {
        if (new Date(this.state.date_debut) <= new Date() || this.state.date_debut >= this.state.date_fin) {
            alert('Date non valide');
        } else {
            fetch('http://localhost:3010/reservation', {
                method: 'post',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    id_hotel: this.props.hotel.id,
                    nom_cli: this.state.nom,
                    prenom_cli: this.state.prenom,
                    email_cli: this.state.email,
                    date_debut: this.state.date_debut,
                    date_fin: this.state.date_fin,
                    type_chambre: this.state.type_chambre
                })
            } )
        }

    }


    render() {
        const { BackFunction, render, hotel } = this.props;
        var display = render === 'reserve' ? true : false;
        return(
            <Dialog
                className="reserve"
                fullWidth={true}
                maxWidth={"lg"}
                open={display}
                >
                <DialogContent>
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="reservation" className="ba b--transparent ph0 mh0">
                        <legend className="f3 light-red fw6 ph0 mh0 center ttu tracked">{hotel.hotel}</legend>
    
                        <p className="tc"><span className="light-red mv2 b">Simple : </span>{hotel.prixsimple}</p>
                        <p className="tc"><span className="light-red mv2 b">Double : </span>{hotel.prixdouble}</p>
                        <p className="tc"><span className="light-red mv2 b">Triple : </span>{hotel.prixtriple}</p>
    
                        <div className="mt3">
                            <label className="light-red db fw6 lh-copy f6" >Nom</label>
                            <input onChange={this.onInput.bind(this, 'nom')} className="pa2 input-reset di ba bg-transparent hover-black w-80" type="text" />
                            <span className="ml3 fw6 correct" style={this.whitify('nom')}>✓</span>
                        </div>
                        <div className="mt3">
                            <label className="light-red db fw6 lh-copy f6" >Prenom</label>
                            <input onChange={this.onInput.bind(this, 'prenom')} className="pa2 input-reset ba bg-transparent hover-black w-80" type="text" />
                            <span className="ml3 fw6 correct" style={this.whitify('prenom')}>✓</span>
                        </div>
                        <div className="mt3">
                            <label className="light-red db fw6 lh-copy f6" >E-mail</label>
                            <input onChange={this.onInput.bind(this, 'mail')} className="pa2 input-reset ba bg-transparent hover-black w-80" type="email" />
                            <span className="ml3 fw6 correct" style={this.whitify('email')}>✓</span>
                        </div>
                        <div className="mt3">
                            <label className="light-red db fw6 lh-copy f6" >Date debut</label>
                            <input onChange={this.onInput.bind(this, 'dd')} className="pa2 input-reset ba bg-transparent hover-black w-80" type="date" />
                        </div>
                        <div className="mt3">
                            <label className="light-red db fw6 lh-copy f6" >Date Fin</label>
                            <input onChange={this.onInput.bind(this, 'df')} className="pa2 input-reset ba bg-transparent hover-black w-80" type="date" />
                        </div>
                        <div className="mt3">
                            <label className="light-red db fw6 lh-copy f6" >Type chambre</label>
                            <div className="w-100 center db mt2"><input onChange={this.onInput.bind(this, 'tc')} className="di" type="radio" name="typechambre" value="simple"/><p className="ml2 w-100 tc di b">Simple</p></div>
                            <div className="w-100 center db mt2"><input onChange={this.onInput.bind(this, 'tc')} className="di" type="radio" name="typechambre" value="double"/><p className="ml2 w-100 tc di b">double</p></div>
                            <div className="w-100 center db mt2 mb2"><input onChange={this.onInput.bind(this, 'tc')} className="di" type="radio" name="typechambre" value="triple"/><p className="ml2 w-100 tc di b">Triple</p></div>
                        </div>
                        </fieldset>
                        <div className="mt3">
                        <button onClick={() => this.registerToDBReservation()} className="light-red b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Valider</button>
                        </div>
                    </form>
                </main>
                </DialogContent>
                <DialogActions>
                    <Button className="grow" onClick={BackFunction} color="primary">
                    <p className="light-red b b1">Quitter</p>
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    
}

export default Reserve;