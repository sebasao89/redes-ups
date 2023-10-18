export default interface Empresa {
    id?: string;
    tipoDocumento: TipoDocumento;
    numDocumento: number;
    digitoVerificacion?: number;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    latitude?: number;
    longitude?: number;
    descripcion?: string
}

export enum TipoDocumento {
    cedulaCiudadania = "Cedula de ciudadania",
    nit = "NIT",
}