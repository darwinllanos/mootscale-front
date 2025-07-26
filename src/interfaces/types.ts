export interface ISubscribe {
    message: string
}

export interface IProduct {
    id: number;
    name: string;
    price: string;
    images: string;
}

export interface IMotorcycle {
    uriImage: string;
    nombreMoto: string;
    comentario: string;
    puntuacion: number;
    precioMercadoLibre: number;
    precioMootscale: number;
}