import React from 'react';
import './Header.css';

const Header = ( {onPageChange, cleanState, connected, username} ) => {
    let admin_menu_value = connected ? username : 'Admin';
    return (
    <header className="Header white tc pv4 avenir w-100">
        <h1 className="logo mt2 mb0 fw8 f2 w-100">Travel Agency</h1>
        <nav className="blogo bt bb tc mw7 center mt4 w-100">
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pv3 ph4-l pointer pa0 ph2" onClick={() => {onPageChange('home'); cleanState()}}>Accueil</button>
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pv3 ph4-l pointer pa0 ph2" onClick={() => onPageChange('contact')}>Contact </button>
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pv3 ph4-l pointer pa0 ph2" onClick={() => onPageChange('gerant')}>Gerant</button>
          <button className="bnone f6 fw8 f4-l link bg-transparent white hover-light-red pv3 ph4-l pointer pa0 ph2" onClick={() => onPageChange('administator')}>{admin_menu_value}</button>
        </nav>
    </header>
    );
}

export default Header;