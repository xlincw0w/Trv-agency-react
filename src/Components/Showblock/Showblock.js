import React, { Component } from 'react';
import '../Reserve/Reserve';
import './Showblock.css';
import Block from '../Block/Block';
import Reserve from '../Reserve/Reserve';

class Showblock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            render: 'base',
            hotel: {}
        }
    }

    PopReserve = (val) => {
        this.setState({render: 'reserve', hotel:val});
    }

    BackFunction = () => {
        this.setState({render: 'base', hotel:{}});
    }


    render() {
        return(
        <div>
            <Reserve 
            BackFunction={this.BackFunction}
            render={this.state.render}
            hotel={this.state.hotel}
            />
            <Block 
            hotels={this.props.hotels}
            PopReserve={this.PopReserve}
            />
        </div>
        )
    }
}
    
    

export default Showblock;