import React from 'react';
import logo from '../images/logo.svg';
import './BannerFooter.css';

const BannerFooter = () => {
    
    return (
        <div className="footer-container">
            <div className="titulo-footer">¡Gracias por acompanarnos!</div>
            <div className="logo-boda">
                <img className="logo-imagen" src={logo} alt="valeria y erick" width="449px" height="152.94px"/>
            </div>
            <div className="mensaje-footer">Amar no es mirarse el uno al otro;<br/> es mirar juntos en la misma direccion</div>
        </div>
    );
};

export default BannerFooter;