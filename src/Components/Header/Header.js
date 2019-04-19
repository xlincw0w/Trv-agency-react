import React from 'react';
import './Header.css';

const Header = ( {onPageChange, cleanState} ) => {
    return (
    <header className="Header white tc pv4 avenir">
        <h1 className="logo mt2 mb0 fw8 f2">Travel Agency</h1>
        <nav className="blogo bt bb tc mw7 center mt4">
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pa3 ph5-l pointer" onClick={() => {onPageChange('home'); cleanState()}}>Accueil</button>
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pa3 ph5-l pointer" onClick={() => onPageChange('contact')}>Contact </button>
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pa3 ph5-l pointer" onClick={() => onPageChange('gerant')}>Gerant</button>
        </nav>
    </header>
    );
}

export default Header;