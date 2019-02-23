import React from 'react';
import './Owner.css';

const Owner = () => {
    return (
        <div className="center tc w-75 bg-black-50 shadow-5 ba b--black">
            <form className="pt3 Owner w-30 tc center white-80">
                <div className="pt1">
                    <label className="f5 b db mb2">Nom<span className="normal white-80"></span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2">Prenom<span className="normal white-80"></span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2">Email<span className="normal white-80"></span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2">Hotel<span className="normal white-80"></span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2">Adresse<span className="normal white-80"></span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2">Pays<span className="normal white-80"></span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt3">
                        <label className="db fw7 mb2">Type chambre</label>

                        <input className="mr1" type="checkbox" id="single" value="single"></input>
                        <label className="f4 fw7">Simple</label>

                        <input className="mr1 ml5" type="checkbox" id="double" value="double"></input>
                        <label className="f4 fw7">Double</label>
        
                        <input className="ml5" type="checkbox" id="triple" value="triple"></input>
                        <label className="f4 fw7">Triple</label>
                </div>
            <a className="db w-50 mt5 center f4 pointer shadow-5 no-underline white hover-light-red pa3 ba border-box">
                    <span className=""> => Souscrire</span>
            </a>
            </form>
        </div>
    );
}

export default Owner;