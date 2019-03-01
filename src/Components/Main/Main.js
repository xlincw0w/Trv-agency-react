import React from 'react';
import Searchbox from '../Searchbox/Searchbox';
import Owner from '../Owner/Owner';
import Contact from '../Contact/Contact';
import Result from '../Result/Result';
import './Main.css';

const Main = ( { OnSubmit, searchfield, page, onSearchChange} ) => {
    return (
    <div className="Main">
    {
    page === 'home' 
        ? <Searchbox onSearchChange={onSearchChange} OnSubmit={OnSubmit} />
        : ( page ==='gerant'
            ? <Owner />
            : ( page === 'contact' 
                ? <Contact />
                : <Result searchfield={searchfield} /> )
        )
    }
    </div>
    );
}
  
export default Main;