// Este archivo contiene funciones utilitarias que son utilizadas en diferentes partes del proyecto, como validaciones y formateo de datos.

export function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function formatearFecha(fecha: Date): string {
    return fecha.toISOString().split('T')[0];
}

export function generarIdUnico(): string {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}