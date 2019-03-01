import React from 'react';
import './Showblock.css';

const Showblock = ( { hotels } ) => {
    let arr = []
    for (let elem in hotels) {
        arr.push({elem: hotels[elem]})
    }
    return  arr.map((elem, i) => {
        return (
            <div key={i} className="center w-50 hidden ba mv4 pointer grow">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3 tc ttu tracked">{hotels[i].hotel}</h1>
                <div className="pa3 bt bg-white">
                    <p className="f6 f5-ns lh-copy center tc measure black mv0">
                    {hotels[i].description}
                    </p>
                    <h2 className="tc light-red f2">{hotels[i].prixsimple} DA / Nuit</h2>
                </div>
            </div>
        )
    })
}
    
    

export default Showblock;
