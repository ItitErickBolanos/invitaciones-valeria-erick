import React from 'react';
import Carrusel from './common/Carrusel';
import TimelineItem from './TimelineItem';
import nosConocimos from '../images/nos-conocimos.svg';
import okDay from '../images/ok-day.svg';
import primeraCita from '../images/primera-cita.svg';
import novios from '../images/novios.svg';
import viaje from '../images/viaje.svg';
import vivirJuntos from '../images/vivir-juntos.svg';
import pedidaMatrimonio from '../images/matrimonio.svg';
import cheemsy from '../images/cheemsy.svg';
import bodaCivil from '../images/boda-civil.svg';
import bodaReligiosa from '../images/boda-religiosa.svg';
import heartIcon from '../images/heart-icon.svg';
import './Timeline.css';
import useWindowSize from '../hooks/useWindowSize';

const Timeline = () => {
    const [ x ] = useWindowSize();
    const elementos = [
        { nombre: 'Boda Civil', icono: bodaCivil, fecha: '16 Jul 22', prev: 9, next: 1 },
        { nombre: 'Boda Religiosa', icono: bodaReligiosa, fecha: '17 Dic 22', prev: 0, next: 2 },
        { nombre: 'Nos conocimos', icono: nosConocimos, fecha: '25 Jul 18', prev: 1, next: 3 },
        { nombre: 'OK Day', icono: okDay, fecha: '15 Mar 19', prev: 2, next: 4 },
        { nombre: 'Primera cita', icono: primeraCita, fecha: '15 Abr 19', prev: 3, next: 5 },
        { nombre: 'Nos hicimos novios', icono: novios, fecha: '18 Jun 19', prev: 4, next: 6 },
        { nombre: 'Primer viaje juntos', icono: viaje, fecha: '9 Jul 19' , prev: 5, next: 7 },
        { nombre: 'Empezamos a vivir juntos', icono: vivirJuntos, fecha: '1 Mar 20', prev: 6, next: 8 },
        { nombre: 'Pedida de Matrimonio', icono: pedidaMatrimonio, fecha: '16 May 21', prev: 7, next: 9 },
        { nombre: 'Nos hicimos papás', icono: cheemsy, fecha: '22 Ago 21', prev: 8, next: 0 },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-title"><img src={heartIcon} alt="heart" />Nuestra Historia<img src={heartIcon} alt="heart" /></div>
            <div className="timeline-carrusel">
                <Carrusel tipo={'timeline'} elementos={elementos} elementosMostrados={x > 1439 ? 5 : 1} >
                    { elementos.map(
                        (elemento, index) => {
                            const middleElement = Math.floor((x > 1439 ? 5 : 1) / 2);

                            return (
                                <TimelineItem 
                                    nombre={elemento.nombre} 
                                    icono={elemento.icono} 
                                    fecha={elemento.fecha} 
                                    key={elemento.nombre} 
                                    className={index === middleElement ? null : 'non-active'}
                                />
                            )
                        }) 
                    }
                </Carrusel>
            </div>
        </div>
    );
};

export default Timeline;