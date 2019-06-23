import React, {component} from 'react';
import Button from '@material-ui/core/Button';
import './Unconfirmed.css';

const confirmHandler = (id, event) => {
        fetch('http://localhost:3010/confirm', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                id: id,
                confirmed: true,
            })
        })
    }

const rejectHandler = (id, event) => {
        fetch('http://localhost:3010/confirm', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                id: id,
                confirmed: false,
            })
        })
}

const Unconfirmed = ( { hotels }) => {

    return hotels.map((elem, i) => {
        return (<div key={i} className="maindiv white tc center mt5 sboxAnim Submit bg-transparent shadow-5 ba">
            <div className="hotelname w-100 h-100 dt">
                <h1 className="f4 dtc v-mid ttu">{elem.hotel}</h1>
            </div>
            <div className="ownersname w-100 h-100 dt">
                <div className="dtc v-mid">
                <h1 className="f5">{elem.nom}</h1>
                    <h1 className="f5">{elem.prenom}</h1>
                </div>
            </div>
            <div className="addr w-100 h-100 dt">
            <h1 className="f5 dtc v-mid">{elem.adresse}</h1>
            </div>
            <div className="buttons w-100 h-100 dt">
                <div className="dtc v-mid">
                    <div className="w-100 h-100 di">
                        <Button onClick={confirmHandler.bind(this, elem.id)} variant="contained" color="primary" className='adminButton'>
                            Confirmer
                        </Button>
                    </div>
                    <div className="ml3 w-100 h-100 di">
                        <Button onClick={rejectHandler.bind(this, elem.id)} variant="contained" color="secondary" className='adminButton'>
                            Rejeter
                        </Button>
                    </div>
                </div>
            </div>
        </div>)
    }
    )
}
export default Unconfirmed;