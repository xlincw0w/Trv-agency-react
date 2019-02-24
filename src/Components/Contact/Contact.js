import React from 'react';
import './Contact.css';

const Contact = ( {onPageChange} ) => {
    return (
    <div className="Contact w-75 h-50 db center tc bg-white-20 ba b--black">
        <h1 className="light-red db mb5 underline">Nous Contacter :</h1>
        <div className="white">
        <h2>Aide et contact</h2>
        <h2 className="mb5">Vous cherchez à joindre le service client ?
            Vous avez besoin d'aide ou de conseils ?</h2>
            <h3>Tel : +21300000000</h3>
            <h3>Fax : +21300000000</h3>
            <h3>Email : contact@travelagency.com</h3>
        </div>
    </div>
    );
}
  
export default Contact;