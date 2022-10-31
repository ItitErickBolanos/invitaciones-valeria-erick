import React from 'react';
import PropTypes from 'prop-types';

const DisplayFechaHora = ({ type, value }) => {
    return (
        <div className="displayFechaHora">
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

DisplayFechaHora.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default DisplayFechaHora;