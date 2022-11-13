import React from 'react';
import PropTypes from 'prop-types';
import './Boton.css';

const Boton = ({ texto, onClickHandle, disabled }) => {
    return (
        <button className="boton" onClick={onClickHandle} disabled={disabled}>{texto}</button>
    );
};

Boton.propTypes = {
    texto: PropTypes.string.isRequired,
    onClickHandle: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default Boton;