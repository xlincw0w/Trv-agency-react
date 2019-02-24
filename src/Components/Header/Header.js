import React from 'react';
import './Header.css';

const Header = ( {onPageChange} ) => {
    return (
    <header className="Header white tc pv4 avenir">
        <h1 className="mt2 mb0 i fw5 f1">Travel Agency</h1>
        <nav className="bt bb tc mw7 center mt4">
          <button className="bnone f6 f4-l link bg-transparent white hover-light-red dib pa3 ph5-l pointer" onClick={() => onPageChange('home')}>Accueil</button>
          <button className="bnone f6 f4-l link bg-transparent white hover-light-red dib pa3 ph5-l pointer" onClick={() => onPageChange('contact')}>Contact </button>
          <button className="bnone f6 f4-l link bg-transparent white hover-light-red dib pa3 ph5-l pointer" onClick={() => onPageChange('gerant')}>Gerant</button>
        </nav>
    </header>
    );
}

export default Header;