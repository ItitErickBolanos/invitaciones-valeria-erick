import React from 'react';
import Carrusel from './common/Carrusel';
import './Recuerdos.css';
import img1 from '../images/IMG_1.png';
import img2 from '../images/IMG_2.png';
import img3 from '../images/IMG_3.png';
import img4 from '../images/IMG_4.png';
import img5 from '../images/IMG_5.png';
import img6 from '../images/IMG_6.png';
import img7 from '../images/IMG_7.png';
import useWindowSize from '../hooks/useWindowSize';

const Recuerdos = () => {
    const [ x ] = useWindowSize();
    const elementos = [
        { url: img1, nombre: 'IMG_1', next: 1, prev: 6},
        { url: img2, nombre: 'IMG_2', next: 2, prev: 0},
        { url: img3, nombre: 'IMG_3', next: 3, prev: 1},
        { url: img4, nombre: 'IMG_4', next: 4, prev: 2},
        { url: img5, nombre: 'IMG_5', next: 5, prev: 3},
        { url: img6, nombre: 'IMG_6', next: 6, prev: 4},
        { url: img7, nombre: 'IMG_7', next: 0, prev: 5}
    ];

    return (
        <div className="recuerdos-container">
            <div className="titulo-recuerdos">Nuestros Recuerdos</div>
            <div className="carrusel">
                <Carrusel tipo={'fotos'} elementos={elementos} elementosMostrados={x > 1439 ? 3 : 1} >
                    { elementos.map(elemento => (<img src={elemento.url} alt={elemento.nombre} className="imagen-recuerdo" key={elemento.nombre} />)) }
                </Carrusel>
            </div>
            <div className="recuerdos-footer">
                Comparte tus fotos con nosotros con el hashtag <span className="hashtag">#VamleriayEmrick</span>
            </div>
        </div>
    );
};

export default Recuerdos;