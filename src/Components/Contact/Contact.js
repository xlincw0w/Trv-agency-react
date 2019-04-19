import React from 'react';
import './Contact.css';

const Contact = ( {onPageChange} ) => {
    return (
    <div className="contact mt5 w-75 h-50 db center tc ba b--black">
        <h1 className="light-red db mb5 pt5">Nous Contacter :</h1>
        <div className="white">
        <h2>Plateform web developper pour un project mémoire  !</h2>
        <h4>Groupe : </h4>
        <p>Khaled Khazem</p>
        <p>Dehbia Djebarri</p>
        <p>Said Zidelmal</p>
        <p>Amel Hameg</p>
        <h2 className="pt4 light-red">Aide et contact :</h2>
        <h2 className="mb5">Vous cherchez à joindre le service client ?
            Vous avez besoin d'aide ou de conseils ?</h2>
            <h3>Tel : +21300000000</h3>
            <h3>Fax : +21300000000</h3>
            <h3>Email : contact@travelagency.com</h3>
        </div>
        <p className="white f1 p2">❖</p>
    </div>
    );
}
  
export default Contact;