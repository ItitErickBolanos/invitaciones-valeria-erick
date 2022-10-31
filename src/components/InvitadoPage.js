import React, { useEffect, useState } from 'react';
import BannerCountdown from './BannerCountdown';
import FormularioConfirmacion from './FormularioConfirmacion';
import Hoteles from './Hoteles';
import Locacion from './Locacion';
import MesaRegalos from './MesaRegalos';
import Timeline from './Timeline';
import { ref, onValue } from "firebase/database";

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
        <>
            <BannerCountdown />
            <Locacion />
            <Hoteles />
            <Timeline />
            <MesaRegalos />
            <FormularioConfirmacion datosInvitado={datosInvitado}/>
        </>
    );
};

export default InvitadoPage;