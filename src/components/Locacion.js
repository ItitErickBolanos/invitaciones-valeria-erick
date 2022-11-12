import React from 'react';
import PropTypes from 'prop-types';
import ceremonia from '../images/ceremonia.png';
import recepcion from '../images/recepcion.png';
import Boton from './common/Boton';
import './Locacion.css';

const Locacion = ({ tipo, titulo, direccion, hora, urlMapa}) => {

    const botonClick = () => {
        window.open(urlMapa);
    };

    return (
        <div className="locacion-container">
            <img className={`imagen-${tipo}`} src={tipo === 'ceremonia' ? ceremonia : recepcion} alt={tipo} />
            <div className="type">{tipo}</div>
            <div className="locacion-title">{titulo}</div>
            <div className="direccion">{direccion}</div>
            <div className="hora">{hora}</div>
            <Boton texto={'Ver mapa'} onClickHandle={botonClick}/>
        </div>
    );
};

Locacion.PropType = {
    tipo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    urlMapa: PropTypes.string.isRequired
};

export default Locacion;