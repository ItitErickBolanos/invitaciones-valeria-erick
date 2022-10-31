import React from 'react';
import useCountdown from '../hooks/useCountdown';
import DisplayFechaHora from './DisplayFechaHora';

const BannerCountdown = () => {
    const fechaBoda = new Date('2022-12-17').getTime();
    const [days, hours, minutes, seconds] = useCountdown(fechaBoda);

    return (
        <div className="banner-countdown">
            <DisplayFechaHora type={ 'días' } value={days}/>
            <p>:</p>
            <DisplayFechaHora  type={ 'horas' } value={hours}/>
            <p>:</p>
            <DisplayFechaHora  type={ 'minutos' } value={minutes}/>
            <p>:</p>
            <DisplayFechaHora  type={ 'segundos' } value={seconds}/>
        </div>
    );
};

export default BannerCountdown;