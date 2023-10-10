export default interface Empresa {
    id: number;
    tipoDocumento: TipoDocumento;
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

export enum TipoDocumento {
    cedulaCiudadania = "Cedula de ciudadania",
    nit = "NIT",
}