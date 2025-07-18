export interface Pago {
    id: string;
    monto: number;
    metodo: string;
    estado: 'pendiente' | 'completado' | 'fallido';
    fecha: Date;
}

export interface Recibo {
    id: string;
    pagoId: string;
    fechaEmision: Date;
    monto: number;
    detalles: string;
}