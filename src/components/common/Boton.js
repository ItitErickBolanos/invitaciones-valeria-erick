import React from 'react';
import PropTypes from 'prop-types';
import './Boton.css';

const Boton = ({ texto, tipo, onClickHandle }) => {
    return (
        <button className={`boton boton-${tipo}`} onClick={onClickHandle}>{texto}</button>
    );
};

Boton.propTypes = {
    texto: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    onClickHandle: PropTypes.func.isRequired
};

export default Boton;