import React from 'react';
import './Submit.css';

const Submit = ( {OnSubmit} ) => {
    return (
    <div className="w-100">
        <button onClick={OnSubmit} href="" className="Submit bg-transparent db mt3 center f4 shadow-5 pointer no-underline white hover-light-red pa3 ba">
            <span className="md2 fw8"> => Recherchez</span>
        </button>
    </div>
    );
}

export default Submit;