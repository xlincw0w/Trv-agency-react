import React from 'react';
import './Searchbox.css';
import Submit from '../../Components/Submit/Submit';

const Searchbox = ( {onSearchChange} ) => {
    return (
        <div className="Searchbox mt6 tc">
            <label htmlFor="name" className="f3 white b db mb2">Comparez les prix et trouvez votre hotel idéal.</label>
            <input id="name" className="search f3 shadow-5 br2 h3 bg-transparent ba white pa2 mb2 w-50" type="text" placeholder='Destination...' onChange={onSearchChange}/>
            <Submit />
        </div>
    )
}

export default Searchbox;