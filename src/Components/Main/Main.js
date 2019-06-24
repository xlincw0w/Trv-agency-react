import React from 'react';
import Searchbox from '../Searchbox/Searchbox';
import Owner from '../Owner/Owner';
import Contact from '../Contact/Contact';
import Result from '../Result/Result';
import Administator from '../Administator/Administator';
import './Main.css';

const Main = ( { OnSubmit, searchfield, page, onPageChange, connectionHandler, disconnect, onSearchChange, connected} ) => {
    return (
    <div className="Main">
    {
    page === 'home' 
        ? <Searchbox onSearchChange={onSearchChange} OnSubmit={OnSubmit} />
        : ( page ==='gerant'
            ? <Owner />
            : ( page === 'contact' 
                ? <Contact />
                : ( page === 'result' 
                    ? <Result searchfield={searchfield} /> 
                    : <Administator onPageChange={onPageChange} connectionHandler={connectionHandler} connected={connected} disconnect={disconnect}/> 
        )))
    }
    </div>
    );
}
  
export default Main;