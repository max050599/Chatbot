// This file defines the conversation flow of the chatbot. It exports functions that manage different stages of interaction and bot responses.

export const iniciarConversacion = () => {
    return "¡Hola! ¿Cómo puedo ayudarte hoy?";
};

export const gestionarPago = () => {
    return "Para procesar tu pago, por favor proporciona los detalles necesarios.";
};

export const confirmarPago = (monto: number) => {
    return `Tu pago de ${monto} ha sido procesado con éxito. ¿Necesitas algo más?`;
};

export const generarRecibo = (monto: number, fecha: string) => {
    return `Recibo generado: Monto: ${monto}, Fecha: ${fecha}`;
};