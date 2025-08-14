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

export interface IProductEcommerce {
    id: number;
    name: string;
    price: string;
    images: string;
    description: string;
    category: string;
    brand: string;
    stock: number;
}
