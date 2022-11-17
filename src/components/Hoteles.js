import React from 'react';
import './Hoteles.css';

const Hoteles = () => {
    return (
        <div className="reservaciones-container">
            <div className="titulo-reservaciones">Opciones de reservaciones</div>
            <div className="hoteles-container">
                <div className="hotel">
                    <div className="titulo-hotel">Hs hotsson Smart Value</div>
                    <div className="descripcion-hotel">Código para reservación: <strong>BDAV&E</strong></div>
                    <div className="descripcion-hotel">Habitación sencilla o doble por noche: $1,121.00 MXN</div>
                    <div className="telefono-hotel">(477) 719 8010</div>
                    <a className="hotel-url" href='https://hotsson.com' target="_blank" rel="noreferrer">hotsson.com</a>
                </div>
                <div className="hotel">
                    <div className="titulo-hotel">Hotel Inglaterra</div>
                    <div className="descripcion-hotel">Código para reservación: <strong>VALERIAYERICK</strong></div>
                    <div className="descripcion-hotel">Habitación sencilla por noche: $1,134.00 MXN</div>
                    <div className="descripcion-hotel">Habitación doble por noche: $1,242.00 MXN</div>
                    <div className="telefono-hotel">(833) 230 4444</div>
                    <a className="hotel-url" href='http://hinglaterra.com.mx' target="_blank" rel="noreferrer">hinglaterra.com.mx</a>
                </div>
                <div className="hotel">
                    <div className="titulo-hotel">City Express Plus</div>
                    <div className="descripcion-hotel">Código para reservación: <strong>BODAVYE</strong></div>
                    <div className="descripcion-hotel">Habitación sencilla por noche: $1,262.60 MXN</div>
                    <div className="descripcion-hotel">Habitación doble por noche: $1,380.60 MXN</div>
                    <div className="telefono-hotel">(833) 478 0340</div>
                    <a className="hotel-url" href='https://cityexpress.com' target="_blank" rel="noreferrer">cityexpress.com</a>
                </div>
            </div>
        </div>
    );
};

export default Hoteles;