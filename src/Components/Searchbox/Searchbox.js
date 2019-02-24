import React from 'react';
import './Searchbox.css';
import Submit from '../../Components/Submit/Submit';

const Searchbox = ( {onSearchChange} ) => {
    return (
        <div className="Searchbox w-100 flex flex-wrap">
            <h1 className="f3 white b w-100 mb0 tc">Comparez les prix et trouvez votre hotel idéal.</h1>
            <input id="name" 
                    className="md2 search center f3 shadow-5 br2 h3 mt3 bg-transparent ba white" 
                    type="text" 
                    placeholder='Destination...' 
                    onChange={onSearchChange}
            />
            <Submit />
        </div>
    )
}

export default Searchbox;