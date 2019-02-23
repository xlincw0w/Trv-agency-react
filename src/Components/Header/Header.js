import React from 'react';
import './Header.css';

const Header = ( {onPageChange} ) => {
    return (
    <header className="Header white tc pv4 avenir">
        <h1 className="mt2 mb0 i fw5 f1">Travel Agency</h1>
        <nav className="bt bb tc mw7 center mt4">
          <a className="f6 f4-l link bg-animate white hover-light-red dib pa3 ph5-l pointer" onClick={() => onPageChange('home')}>Accueil</a>
          <a className="f6 f4-l link bg-animate white hover-light-red dib pa3 ph5-l pointer">Contact</a>
          <a className="f6 f4-l link bg-animate white hover-light-red dib pa3 ph5-l pointer" onClick={() => onPageChange('gerant')}>Gerant</a>
        </nav>
    </header>
    );
}

export default Header;