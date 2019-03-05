import React from 'react';
import './Result.css';
import Showblock from '../Showblock/Showblock';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: {}
        }
    } 

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