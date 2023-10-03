export default interface Empresa {
    id: number;
    TipoDocumento: string;
    numDocumento: number;
    digitoVerificacion?: number;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    latitude?: number;
    longitude?: number;
    description?: string
}