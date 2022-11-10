import React from 'react';
import useCountdown from '../hooks/useCountdown';
import DisplayFechaHora from './DisplayFechaHora';
import './BannerCountdown.css';
import logo from '../images/logo.svg';

const BannerCountdown = () => {
    const fechaBoda = new Date('2022-12-17T18:00-06:00').getTime();
    const [days, hours, minutes, seconds] = useCountdown(fechaBoda);

    return (
        <div className="banner-countdown">
            <div className="titulo-boda">¡Nos casamos!</div>
            <div className="logo-boda">
                <img src={logo} alt="valeria y erick"/>
            </div>
            <div className="fecha-boda">17 de Diciembre 2022</div>
            <div className="countdown-container">
                <DisplayFechaHora type={ 'Días' } value={days}/>
                <p className='display-divider'>:</p>
                <DisplayFechaHora  type={ 'Horas' } value={hours}/>
                <p className='display-divider'>:</p>
                <DisplayFechaHora  type={ 'Minutos' } value={minutes}/>
                <p className='display-divider'>:</p>
                <DisplayFechaHora  type={ 'Segundos' } value={seconds}/>
            </div>
        </div>
    );
};

export default BannerCountdown;