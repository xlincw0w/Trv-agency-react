import React from 'react';
import './Searchbox.css';
import Submit from '../../Components/Submit/Submit';

const Searchbox = ( {onSearchChange, OnSubmit} ) => {
    return (
        <div className="Searchbox w-100 flex flex-wrap">
            <h1 className="f2 white w-100 mb0 tc">Comparez les prix et trouvez votre hotel idéal.</h1>
            <input id="name" 
                    className="sboxAnim md2 search center f3 shadow-5 br2 bg-transparent h3 mt3 ba white" 
                    type="text"
                    placeholder='Destination...' 
                    onChange={onSearchChange}
            />
            <Submit OnSubmit={OnSubmit}/>
        </div>
    )
}

export default Searchbox;