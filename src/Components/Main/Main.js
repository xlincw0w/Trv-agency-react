import React from 'react';
import Searchbox from '../Searchbox/Searchbox';
import Owner from '../Owner/Owner';
import Contact from '../Contact/Contact';
import './Main.css';

const Main = ( {page, onSearchChange} ) => {
    return (
    <div className="Main">
    {
    page === 'home' 
        ? <Searchbox onSearchChange={onSearchChange} />
        : ( page ==='gerant'
            ? <Owner />
            : <Contact />
        )
    }
    </div>
    );
}
  
export default Main;
  
  

  