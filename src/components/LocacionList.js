import React from 'react';
import Locacion from './Locacion';
import './LocacionList.css';

const LocacionList = () => {
    return (
        <div className="locacion-list-container">
            <div className="locacion-list-title">¡Nos encantará verlos pronto!</div>
            <div className="locaciones-container">
                <Locacion 
                    tipo={'ceremonia'} 
                    titulo={'Catedral de Tampico'} 
                    direccion={'Emilio Carranza 101, Zona Centro, 89000 Tampico, Tamps.'} 
                    hora={'6:00 PM'} 
                    urlMapa={''}
                />
                <Locacion 
                    tipo={'recepcion'} 
                    titulo={'Antiguo Casino Salon'} 
                    direccion={'Fray Andrés de Olmos 103, Zona Centro, 89000 Tampico, Tamps'} 
                    hora={'7:00 PM'} 
                    urlMapa={''}
                />
            </div>
        </div>
    );
};

export default LocacionList;