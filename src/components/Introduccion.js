import React, { useState } from 'react';
import './Introduccion.css';
import logoZelda from '../images/logo-zelda.svg';
import heart from '../images/heart.svg';
import knife from '../images/knife.svg';

const Introduccion = () => {
    const [ knifeClickCount, setKnifeClickCount ] = useState(0);
    const [ showKnife, setShowKnie ] = useState(false);

    const clickKnife = () => {
        setKnifeClickCount((prev) => {
            let newCount = prev + 1;
            if(newCount === 5) {
                setShowKnie(prevShow => !prevShow);
                newCount = 0;
            }
            return newCount;
        });
    };

    return (
        <div className='introduccion-container'>
            <div className="content">
                <img src={logoZelda} className="logo-zelda" alt="logo-zelda"/>
                <div className="text-container">
                    <div className="title">
                        Con la gracia de Dios y Bendicion de nuestros padres
                    </div>
                    <div className="papas-container">
                        <div className="papas">
                            <img src={heart} className="heart-icon" alt="heart-icon"/>
                            <span>Maria Luisa Betancourt Juárez</span>
                            <span onClick={clickKnife}>{showKnife && <img src={knife} alt="knife" width="24px" height="24px"/>}José Sánchez Rubio</span>
                        </div>
                        <div className="papas">
                            <img src={heart} className="heart-icon" alt="heart-icon"/>
                            <span>Rocío Rubio Ruvalcaba</span>
                            <span>Federico Bolaños Turrubiates</span>
                        </div>
                    </div>
                    <div className="footer">
                        Uniremos nuestras vidas por el sacramento del Matrimonio <br/>y tenemos el honor<br/> de invitarte a ser parte de esta celebración
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduccion;