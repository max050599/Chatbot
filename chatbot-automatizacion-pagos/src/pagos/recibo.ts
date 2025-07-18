class Recibo {
    private id: string;
    private fecha: Date;
    private monto: number;
    private metodoPago: string;

    constructor(id: string, monto: number, metodoPago: string) {
        this.id = id;
        this.fecha = new Date();
        this.monto = monto;
        this.metodoPago = metodoPago;
    }

    public generarRecibo(): string {
        return `Recibo ID: ${this.id}\nFecha: ${this.fecha.toISOString()}\nMonto: $${this.monto.toFixed(2)}\nMétodo de Pago: ${this.metodoPago}`;
    }

    public obtenerInformacion(): { id: string; fecha: Date; monto: number; metodoPago: string } {
        return {
            id: this.id,
            fecha: this.fecha,
            monto: this.monto,
            metodoPago: this.metodoPago,
        };
    }
}

export default Recibo;