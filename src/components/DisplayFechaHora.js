import React from 'react';
import PropTypes from 'prop-types';
import './DIsplayFechaHora.css';

const DisplayFechaHora = ({ type, value }) => {
    return (
        <div className="display-fecha-hora">
            <div className="valor">{value}</div>
            <div className='tipo'>{type}</div>
        </div>
    );
};

DisplayFechaHora.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default DisplayFechaHora;