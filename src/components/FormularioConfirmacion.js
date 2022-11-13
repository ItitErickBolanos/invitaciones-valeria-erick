import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FormularioConfirmacion.css';
import Boton from './common/Boton';

const FormularioConfirmacion = ({ datosInvitado }) => {

    const invitadosArr = [...Array(datosInvitado.numeroInvitados).keys()].map(n => ++n);
    const [ formValid, setFormValid ] = useState(true);

    const handleRadioChange = (event) => {
        console.log(event);
    };

    const handleSelectChange = (event) => {
        console.log(event);
    }

    const handleTextChange = (event) => {
        console.log(event);
    };

    const handleSubmit = (event) => {
        console.log(event);
    }

    return (
        <div className="formulario-container">
            <form className="confirmacion-container">
                <div className="confirmacion-title">Confirmacion de Asistencia</div>
                <div className="datos-invitado">
                    <span className="nombre-invitado">{datosInvitado.nombreInvitado}</span>
                    <br/>
                    <span className="texto-verde">{datosInvitado.numeroInvitados > 1 ? `Pase para ${datosInvitado.numeroInvitados} personas` : 'Pase personal'}</span>
                </div>
                <div className="fecha-confirmacion">Eres muy importante para nosotros, entendemos si no puedes acompañarnos, pero si requerimos tu confirmación.<br/> Favor de confirmar antes del <span className="texto-verde">5 de Diciembre de 2022</span>. 
                <br/><br/>Amamos y adoramos a tus hijos pero por esta ocasión solo adultos, por favor <span className="texto-verde">''NO NIÑOS''</span></div>
                <div className="preguntas-container">
                    <div className="texto-verde">¿Podrás asistir?</div>
                    <div className="radio-container">
                        <div className="radio">
                            <input type="radio" name="asistencia" value="true" onChange={(event) => { handleRadioChange(event) }}/><label htmlFor="asistencia" className="texto-verde">Si, asistiré</label>
                        </div>
                        <div className="radio">
                            <input type="radio" name="asistencia" value="false" onChange={(event) => { handleRadioChange(event) }}/><label htmlFor="asistencia" className="texto-verde">Lo siento, no podré asistir :c</label>
                        </div>
                    </div>
                    {datosInvitado.numeroInvitados > 1 && (<div className="select-container">
                        <div className="texto-verde">¿Cuántas personas asistirán?</div>
                        <select id="numeroAsiste" value="1" onChange={(event) => { handleSelectChange(event); }}>
                            {invitadosArr.map(invitado => (<option key={invitado}>{invitado}</option>))}
                        </select>
                    </div>)}
                    <div className="mensaje-container">
                        <div className="texto-verde">Puedes dejarnos un mensaje</div>
                        <textarea id="mensaje" placeholder="Deja aquí tu mensaje..." onChange={handleTextChange}></textarea>
                    </div>
                </div>
                <Boton texto="Enviar" disabled={formValid} onClickHandle={handleSubmit}/>
            </form>
        </div>
    );
};

FormularioConfirmacion.propTypes = {
    datosInvitado: PropTypes.object.isRequired
};

export default FormularioConfirmacion;