import React from 'react';
import './MesaRegalos.css';
import blazer from '../images/blazer.svg';
import dress from '../images/dress.svg';
import liverpool from '../images/liverpool-logo.svg';
import envelope from '../images/envelope.svg';
import letters from '../images/letters.svg';
import Boton from './common/Boton';

const MesaRegalos = () => {
    const handleClick = (url) => {
        window.open(url);
    };

    return (
        <div className="mesa-container">
            <div className="mesa-content">
                <div className="mesa-title">Código de vestimenta</div>
                <div className="mesa-codigo">
                    <div>
                        <img src={blazer} alt="blazer" />
                        <img src={dress} alt="dress" />
                    </div>
                    <div className="codigo-texto">Formal<br/>No <span className="texto-rosa">rosa</span></div>
                </div>
                <img src={letters} alt="letras" width="90%" />
                <div className="mesa-texto">
                    <div className="mesa-title">Mesa de regalos</div>
                    <div className="mesa-mensaje">Sin ti esto no sería posible. Nuestro mejor regalo es tu presencia, <br/>pero si tu deseo es hacernos un obsequio, estas son nuestras sugerencias: </div>
                    <div className="logos-container">
                        <div className="mesa-liverpool">
                            <div>
                                <img src={liverpool} alt="liverpool"/>
                            </div>
                            <div className="texto-rosa separador">No. del evento: 50830909</div>
                            <Boton texto="Ver" onClickHandle={() => { handleClick('https://mesaderegalos.liverpool.com.mx/milistaderegalos/50830909') }}/>
                        </div>
                        <div className="mesa-efectivo">
                            <img src={envelope} alt="sobre" width="92px" height="92px"/>
                            <div>En efectivo el día de la boda</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MesaRegalos;