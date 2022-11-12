import React, { useEffect, useState } from 'react';
import BannerCountdown from './BannerCountdown';
import FormularioConfirmacion from './FormularioConfirmacion';
import Hoteles from './Hoteles';
import LocacionList from './LocacionList';
import MesaRegalos from './MesaRegalos';
import Timeline from './Timeline';
import { ref, onValue } from "firebase/database";
import './InvitadoPage.css';
import Introduccion from './Introduccion';
import Recuerdos from './Recuerdos';
import BannerFooter from './BannerFooter';

const InvitadoPage = (props) => {
    const idInvitado = props.match.params.id;

    const [ datosInvitado, setDatosInvitado ] = useState({});

    //Here we make use of useEffect to load the invitado data
    useEffect(() => {
        //Call Firebase API to retrieve datos de invitado
        const serverResponse = ref(props.database, `invitados/${idInvitado}`);
        onValue(serverResponse, (datosInvitado) => {
            setDatosInvitado(datosInvitado.val());
        });
    }, [idInvitado, props.database]);

    return (
        <div className="invitado-container">
            <BannerCountdown />
            <Introduccion />
            <LocacionList />
            <Hoteles />
            <Recuerdos />
            <Timeline />
            <MesaRegalos />
            <FormularioConfirmacion datosInvitado={datosInvitado}/>
            <BannerFooter />
        </div>
    );
};

export default InvitadoPage;