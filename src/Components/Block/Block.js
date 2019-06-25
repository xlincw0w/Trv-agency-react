import React from 'react';
import './Block.css';

const Block = ( { hotels, PopReserve } ) => {

            let arr = []
            for (let elem in hotels) {
            arr.push({elem: hotels[elem]})
            }

            return arr.map((elem, i) => {
                let hotel = elem.elem;  
                return (
                    <div key={i} className="mt4">
                        <div onClick={() => PopReserve(hotel)} className="showblock bg-white-80 center ba pointer grow">
                            <h1 className="f4 bg-near-black white mv0 pv2 ph3 tc ttu tracked">{hotel.hotel}</h1>
                            <div className="pa3 bt bg-white">
                                <p className="showblockdiv f6 f5-ns lh-copy center tc measure black mv0 capitalize">
                                {hotel.description}
                                </p>
                                <h2 className="tc light-red f2">{hotel.prixsimple} DA / Nuit</h2>
                                <h2 className="f4 bg-light-red white mv0 pv2 ph3 tc ttu tracked">Region : {hotel.region}</h2>
                            </div>
                        </div>
                    </div>
                )
            })
}

export default Block;