import React, { Component } from 'react';
import './Result.css';
import Showblock from '../Showblock/Showblock';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: {}
        }
    } 

    // Envoie de requete vers le server accompagné de la destination saisie
    componentDidMount() {
        fetch('http://localhost:3010/search', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                destination: this.props.searchfield
            })
        }).then(data => data.json())
        .then(data => {
            this.setState( {hotels: data} )
        });
    }

    render() {

        if (this.state.hotels.length === 0) {
            return <h1 className="tc white notfound f1">Aucun hotel trouvé ...</h1>
        }

        return (
            <Showblock hotels={this.state.hotels}/>
        );
    }
}

export default Result;