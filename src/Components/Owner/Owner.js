import React from 'react';
import './Owner.css';

class Owner extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            hotel: '',
            description: '',
            adresse: '',
            pays: '',
            region: '',
            nc: '',
            cs: '',
            cd: '',
            ct: ''
        }
    }

    submited = () => {
        const max_description_text_length = 150;
        const nom_rg = /^[A-Za-z]+$/;
        const prenom_rg = /^[A-Za-z ]+$/;
        const email_rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const hotel_rg = /^[A-Za-z0-9 ]+$/;
        const description_rg = /^[A-Za-z0-9',.!?éè ]+$/;
        const adresse_rg = /^[A-Za-z0-9 ]+$/;
        const pays_rg = /^[A-Za-z ]+$/;
        const region_rg = /^[A-Za-z ]+$/;
        const nc_rg = /^[0-9]+$/;
        const cs_rg = /^[0-9]+$/;
        const cd_rg = /^[0-9]+$/;
        const ct_rg = /^[0-9]+$/;

        if(!nom_rg.test(this.state.nom)) { alert('Tapez correctement votre nom !') } 
        else if(!prenom_rg.test(this.state.prenom)) { alert('Tapez correctement votre prenom !') }
        else if(!email_rg.test(this.state.email)) { alert('Tapez correctement votre email !') }
        else if(!hotel_rg.test(this.state.hotel)) { alert('Tapez correctement votre hotel !') }
        else if(this.state.description.length > max_description_text_length) { alert('Description trop longue !') }
        else if(!description_rg.test(this.state.description)) { alert('Tapez correctement votre description !') }
        else if(!adresse_rg.test(this.state.adresse)) { alert('Tapez correctement votre adresse !') }
        else if(!pays_rg.test(this.state.pays)) { alert('Tapez correctement votre pays !') }
        else if(!region_rg.test(this.state.region)) { alert('Tapez correctement votre region !') }
        else if(!nc_rg.test(this.state.nc)) { alert('Tapez correctement le nombre de chambres !') }
        else if(!cs_rg.test(this.state.cs)) { alert('Tapez correctement le prix chambre simple !') }
        else if(!cd_rg.test(this.state.cd)) { alert('Tapez correctement le prix chambre double !') }
        else if(!ct_rg.test(this.state.ct)) { alert('Tapez correctement le prix chambre triple !') }
        else { this.registerToDB() }
    }

    registerToDB = (event) => {
        fetch('http://localhost:3010/owner', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                hotel: this.state.hotel,
                description: this.state.description,
                adresse: this.state.adresse,
                pays: this.state.pays,
                region: this.state.region,
                nc: this.state.nc,
                cs: this.state.cs,
                cd: this.state.cd,
                ct: this.state.ct
            })
        } )
    }

    onInput = (variable, event) => {
        switch (variable) {
            case 'nom':
                this.setState( { nom: event.target.value} )
                break;
          
            case 'prenom':
                this.setState( { prenom: event.target.value} )
                break;
          
            case 'email':
                this.setState( { email: event.target.value} )
                break;
          
            case 'hotel':
                this.setState( { hotel: event.target.value} )
                break;
          
            case 'description':
                this.setState( { description: event.target.value} )
                break;
          
            case 'adresse':
                this.setState( { adresse: event.target.value} )
                break;
          
            case 'pays':
                this.setState( { pays: event.target.value} )
                break;
          
            case 'region':
                this.setState( { region: event.target.value} )
                break;
          
            case 'nc':
                this.setState( { nc: event.target.value} )
                break;
          
            case 'cs':
                this.setState( { cs: event.target.value} )
                break;
            case 'cd':
                this.setState( { cd: event.target.value} )
                break;
            case 'ct':
                this.setState( { ct: event.target.value} )
                break;
            default :
                console.log('Error !');
        }
    }

    greenify = (variable) => {
        const nom_rg = /^[A-Za-z]+$/;
        const prenom_rg = /^[A-Za-z ]+$/;
        const email_rg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const hotel_rg = /^[A-Za-z0-9 ]+$/;
        const description_rg = /^[A-Za-z0-9',.!?éè ]+$/;
        const adresse_rg = /^[A-Za-z0-9 ]+$/;
        const pays_rg = /^[A-Za-z ]+$/;
        const region_rg = /^[A-Za-z ]+$/;
        const nc_rg = /^[0-9]+$/;
        const cs_rg = /^[0-9]+$/;
        const cd_rg = /^[0-9]+$/;
        const ct_rg = /^[0-9]+$/;

        const styleToChange = {backgroundColor: 'rgb(255,255,255)'};
        const defaultStyle = {backgroundColor: 'rgb(150,255,150,1)'};

        switch (variable) {
            case 'nom':
                if(!nom_rg.test(this.state.nom)) { return ; } 
                return defaultStyle;
    
            case 'prenom':
                if(!prenom_rg.test(this.state.prenom)) { return styleToChange; } 
                 return defaultStyle;
          
            case 'email':
                if(!email_rg.test(this.state.email)) { return styleToChange; } 
                return defaultStyle;
          
            case 'hotel':
                if(!hotel_rg.test(this.state.hotel)) { return styleToChange; } 
                return defaultStyle;
          
            case 'description':
                if(!description_rg.test(this.state.description)) { return styleToChange; } 
                return defaultStyle;
          
            case 'adresse':
                if(!adresse_rg.test(this.state.adresse)) { return styleToChange; } 
                return defaultStyle;
          
            case 'pays':
                if(!pays_rg.test(this.state.pays)) { return styleToChange; } 
                return defaultStyle;
          
            case 'region':
                if(!region_rg.test(this.state.region)) { return styleToChange; } 
                return defaultStyle;
          
            case 'nc':
                if(!nc_rg.test(this.state.nc)) { return styleToChange; } 
                return defaultStyle;
          
            case 'cs':
                if(!cs_rg.test(this.state.cs)) { return styleToChange; } 
                return defaultStyle;
            case 'cd':
                if(!cd_rg.test(this.state.cd)) { return styleToChange; } 
                return defaultStyle
            case 'ct':
                if(!ct_rg.test(this.state.ct)) { return styleToChange; } 
                return defaultStyle;
            default :
                console.log('Error !');
        }


    }
    
    render() {

        return (
            <div className="mt5 center tc w-75 bg-black-50 shadow-5 ba b--black">
                <form className="pt3 Owner tc center white-80 md1">
                    <div className="pt1">
                        <label className="f5 b db mb2">Nom<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'nom')} style={this.greenify('nom')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Prenom<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'prenom')} style={this.greenify('prenom')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Email<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'email')} style={this.greenify('email')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Hotel<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'hotel')} style={this.greenify('hotel')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Description<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'description')} style={this.greenify('description')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Adresse<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'adresse')} style={this.greenify('adresse')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Pays<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'pays')} style={this.greenify('pays')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Region<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'region')} style={this.greenify('region')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2">Nombre de Chambres<span className="normal white-80"></span></label>
                        <input onChange={this.onInput.bind(this, 'nc')} style={this.greenify('nc')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
    
                    <h2 className="mt5">Prix / Nuit</h2>
    
                    <div className="pt1">
                        <label className="f5 b db mb2"><span className="normal white-80">Chambre Simple</span></label>
                        <input onChange={this.onInput.bind(this, 'cs')} style={this.greenify('cs')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2"><span className="normal white-80">Chambre Double</span></label>
                        <input onChange={this.onInput.bind(this, 'cd')} style={this.greenify('cd')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
                    <div className="pt1">
                        <label className="f5 b db mb2"><span className="normal white-80">Chambre Triple</span></label>
                        <input onChange={this.onInput.bind(this, 'ct')} style={this.greenify('ct')} className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                    </div>
    
                <button onClick={this.submited} className="db mt5 mb3 center f4 pointer shadow-5 no-underline white bg-transparent hover-light-red pa3 ba border-box fw8">
                    => Souscrire
                </button>
                </form>
            </div>
        );
    }
}
export default Owner;