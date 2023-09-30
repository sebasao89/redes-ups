export default interface Empresa {
    id: number;
    typeDocument: string;
    numDocument: number;
    DigVerification?: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    latitude?: number;
    longitude?: number;
    description?: string
}