import React from 'react';
import PropTypes from 'prop-types';
import './Boton.css';

const Boton = ({ texto, onClickHandle }) => {
    return (
        <button className="boton" onClick={onClickHandle}>{texto}</button>
    );
};

Boton.propTypes = {
    texto: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    onClickHandle: PropTypes.func.isRequired
};

export default Boton;