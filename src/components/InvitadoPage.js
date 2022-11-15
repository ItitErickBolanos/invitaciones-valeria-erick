import React, { useEffect, useState } from 'react';
import BannerCountdown from './BannerCountdown';
import FormularioConfirmacion from './FormularioConfirmacion';
import Hoteles from './Hoteles';
import LocacionList from './LocacionList';
import MesaRegalos from './MesaRegalos';
import Timeline from './Timeline';
import { ref, onValue, update } from "firebase/database";
import './InvitadoPage.css';
import Introduccion from './Introduccion';
import Recuerdos from './Recuerdos';
import BannerFooter from './BannerFooter';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import zelda from '../images/zelda.svg';
import link from '../images/link.svg';
import Boton from './common/Boton';

const InvitadoPage = (props) => {
    const idInvitado = props.match.params.id;

    const [ datosInvitado, setDatosInvitado ] = useState({});
    const [ open, setOpen ] = useState(false);

    //Here we make use of useEffect to load the invitado data
    useEffect(() => {
        //Call Firebase API to retrieve datos de invitado
        const serverResponse = ref(props.database, `invitados/${idInvitado}`);
        onValue(serverResponse, (datosInvitado) => {
            setDatosInvitado(datosInvitado.val());
        });
    }, [idInvitado, props.database]);

    const onConfirmacion = (values) => {
        update(ref(props.database, `/invitados/${idInvitado}`), {
            confirmado: values.asistencia === 'si',
            invitadosConfirmados: values.asistencia === 'si' ? values.numeroAsiste : 0,
            mensaje: values.mensaje,
            fechaConfirmacion: new Date().toUTCString()
        }).then(response => {
            hanldeOpen();
        });
    };
    
    const hanldeOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="invitado-container">
            <BannerCountdown />
            <Introduccion />
            <LocacionList />
            <Hoteles />
            <Recuerdos />
            <Timeline />
            <MesaRegalos />
            <FormularioConfirmacion datosInvitado={datosInvitado} onConfirmacion={onConfirmacion}/>
            <BannerFooter />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                id="alert-dialog"
            >
                <DialogTitle id="alert-dialog-title">
                    <img src={zelda} alt="zelda"/>
                    <img src={link} alt="zelda"/>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    ¡Gracias por confirmar!
                </DialogContentText>
                </DialogContent>
                <DialogActions id="alert-dialog-actions">
                    <Boton texto='Cerrar' onClickHandle={handleClose}/>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default InvitadoPage;