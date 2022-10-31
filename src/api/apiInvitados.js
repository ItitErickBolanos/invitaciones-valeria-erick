export default async function getDatosInvitados(idInvitado) {
    let datosInvitado;
    try {
        datosInvitado = await fetch(`https://invitaciones-valeria-erick-default-rtdb.firebaseio.com/${idInvitado}`);
    } catch(error) {
        datosInvitado = error;
    }
    return datosInvitado;
}