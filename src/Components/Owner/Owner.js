import React from 'react';
import './Owner.css';

const Owner = () => {

    return (
        <div className="mt5 center tc w-75 bg-black-50 shadow-5 ba b--black">
            <form className="pt3 Owner tc center white-80 md1">
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

                <h2 className="mt5">Prix / Nuit</h2>

                <div className="pt1">
                    <label className="f5 b db mb2"><span className="normal white-80">Chambre Simple</span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2"><span className="normal white-80">Chambre Double</span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>
                <div className="pt1">
                    <label className="f5 b db mb2"><span className="normal white-80">Chambre Triple</span></label>
                    <input className="forminp ba b--white-20 pa2 mb2 db w-100" type="text" />
                </div>

            <a className="db mt5 mb3 center f4 pointer shadow-5 no-underline white hover-light-red pa3 ba border-box">
                    <span className=""> => Souscrire</span>
            </a>
            </form>
        </div>
    );
}

export default Owner;