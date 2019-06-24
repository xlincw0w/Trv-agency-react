import React, {component} from 'react';
import Button from '@material-ui/core/Button';
import './Unconfirmed.css';


const confirmHandler = (id, i, event) => {
        fetch('http://localhost:3010/confirm', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                id: id,
                confirmed: true,
            })
        }).then(hide(i));
}

const rejectHandler = (id, i, event) => {
        fetch('http://localhost:3010/confirm', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                id: id,
                confirmed: false,
            })
        }).then(hide(i));
}

const hide = (val) => {
    let hotel_to_hide = document.getElementById(val)
    hotel_to_hide.style.display = 'none';
}

const Unconfirmed = ( { hotels }) => {
    return hotels.map((elem, i) => {
        return (<div key={i} id={i} className="maindiv white tc center mt5 sboxAnim Submit bg-transparent shadow-5 ba">
            <div className="hotelname w-100 h-100 dt">
                <h1 className="f4 dtc v-mid ttu">{elem.hotel}</h1>
            </div>
            <div className="ownersname w-100 h-100 dt">
                <div className="dtc v-mid">
                <h1 className="f5 capitalize">{elem.nom}</h1>
                    <h1 className="f5 capitalize">{elem.prenom}</h1>
                </div>
            </div>
            <div className="addr w-100 h-100 dt">
            <h1 className="f5 dtc v-mid capitalize">{elem.region}</h1>
            </div>
            <div className="buttons w-100 h-100 dt">
                <div className="dtc v-mid">
                    <div className="w-100 h-100 di">
                        <Button onClick={confirmHandler.bind(this, elem.id, i)} variant="contained" color="primary" className='adminButton'>
                            Confirmer
                        </Button>
                    </div>
                    <div className="ml3 w-100 h-100 di">
                        <Button onClick={rejectHandler.bind(this, elem.id, i)} variant="contained" color="secondary" className='adminButton'>
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