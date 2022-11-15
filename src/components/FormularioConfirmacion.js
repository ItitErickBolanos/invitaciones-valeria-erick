import React from 'react';
import PropTypes from 'prop-types';
import './FormularioConfirmacion.css';
import Boton from './common/Boton';
import useForm from '../hooks/useForm';

const FormularioConfirmacion = ({ datosInvitado, onConfirmacion }) => {

    const invitadosArr = [...Array(datosInvitado.numeroInvitados).keys()].map(n => ++n);
    const initialState = { asistencia: datosInvitado.confirmado ? 'si' : '', numeroAsiste: datosInvitado.invitadosConfirmados, mensaje: datosInvitado.mensaje };
    const validations = [
        ({asistencia}) => isRequired(asistencia) || {asistencia: 'Por favor confirma si puedes asistir.'},
    ];
    const {values, isValid, errors, changeHandler, onSubmit} = useForm(initialState, validations, onConfirmacion);


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
                            <input type="radio" name="asistencia" value="si" checked={values.asistencia === "si"} onChange={changeHandler} disabled={datosInvitado.fechaConfirmacion !== ''}/><label htmlFor="asistencia" className="texto-verde">Si, asistiré</label>
                        </div>
                        <div className="radio">
                            <input type="radio" name="asistencia" value="no" checked={values.asistencia === "no"} onChange={changeHandler} disabled={datosInvitado.fechaConfirmacion !== ''}/><label htmlFor="asistencia" className="texto-verde">Lo siento, no podré asistir :c</label>
                        </div>
                    </div>
                    {datosInvitado.numeroInvitados > 1 && (<div className="select-container">
                        <div className="texto-verde">¿Cuántas personas asistirán?</div>
                        <select id="numeroAsiste" name="numeroAsiste" value={values.numeroAsiste} onChange={changeHandler} disabled={values.asistencia === 'no' || values.asistencia === ''}>
                            {invitadosArr.map(invitado => (<option key={invitado}>{invitado}</option>))}
                        </select>
                    </div>)}
                    <div className="mensaje-container">
                        <div className="texto-verde">Puedes dejarnos un mensaje</div>
                        <textarea id="mensaje" name="mensaje" placeholder="Deja aquí tu mensaje..." value={values.mensaje} onChange={changeHandler}  disabled={datosInvitado.fechaConfirmacion !== ''}></textarea>
                    </div>
                </div>
                <Boton texto="Enviar" disabled={!isValid  || datosInvitado.fechaConfirmacion !== ''} onClickHandle={onSubmit}/>
            </form>
        </div>
    );
};

FormularioConfirmacion.propTypes = {
    datosInvitado: PropTypes.object.isRequired,
    onConfirmacion: PropTypes.func.isRequired
};

const isRequired = (value) => {
    return value != null && value !== '';
}

export default FormularioConfirmacion;