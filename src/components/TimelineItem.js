import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({
    icono,
    nombre,
    fecha,
    className
}) => {
    return (
        <div className={`timeline-item ${className}`}>
            <div className="timeline-icon">
                <img src={icono} alt={nombre} />
            </div>
            <div className="timeline-nombre">
                {nombre}
            </div>
            <div className="timeline-fecha">
                {fecha}
            </div>
        </div>
    );
};

export default TimelineItem;