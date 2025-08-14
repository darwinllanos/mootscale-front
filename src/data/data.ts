import type { IMotorcycle, IProductEcommerce } from "../interfaces/types"

export const motorcycleData: IMotorcycle[] = [
      {
        uriImage: "/images/BMW S1000RR BLANCO.webp",
        nombreMoto: "BMW S1000RR",
        comentario: "Muy bonita la moto me gusto bastante",
        puntuacion: 5,
        precioMercadoLibre: 111345,
        precioMootscale: 94360,
      },
      {
        uriImage: "/images/APRILIA.webp",
        nombreMoto: "Aprilia RSVA RR1000",
        comentario: "El diseno escarchado de la moto es genial",
        puntuacion: 4,
        precioMercadoLibre: 110016,
        precioMootscale: 93234,
      },
      {
        uriImage: "/images/YAMAHA R1 AZUL.webp",
        nombreMoto: "YAMAHA R1",
        comentario: "Excelente relación calidad-precio, la moto es genial",
        puntuacion: 5,
        precioMercadoLibre: 129654,
        precioMootscale: 109876,
      },
      {
        uriImage: "/images/KTM SUPERDUKE 1290 NEGRA.webp",
        nombreMoto: "KTM SUPERDUKE 1290",
        comentario: "Gracias por la gestion, esta bonita la moto",
        puntuacion: 5,
        precioMercadoLibre: 106583,
        precioMootscale: 90325,
      },
      {
        uriImage: "/images/KTM SUPERDUKE 1290 GRIS.webp",
        nombreMoto: "KTM SUPERDUKE 1290",
        comentario: "Me encanato la moto, es muy bonita",
        puntuacion: 4,
        precioMercadoLibre: 106583,
        precioMootscale: 90325,
      },
      {
        uriImage: "/images/Kawasaki ZH2R.webp",
        nombreMoto: "KAWASAKY H2R",
        comentario: "La mejor compra que pueden hacer, es una moto espectacular",
        puntuacion: 5,
        precioMercadoLibre: 83946,
        precioMootscale: 71140,
      },
      {
        uriImage: "/images/KAWASAKY NINJA 400.webp",
        nombreMoto: "KAWASAKY NINJA 400",
        comentario: "Me sorprendio el detalle de la moto, es muy bonita",
        puntuacion: 4,
        precioMercadoLibre: 104351,
        precioMootscale: 88433,
      },
      {
        uriImage: "/images/HONDA CB1000RR ROJA.webp",
        nombreMoto: "HONDA CBR1000RR",
        comentario: "Son muy similares a la real, me gusta mucho",
        puntuacion: 4,
        precioMercadoLibre: 99898,
        precioMootscale: 84660,
      },
      {
        uriImage: "/images/HONDA CB1000RR AZUL.webp",
        nombreMoto: "HONDA CBR1000RR",
        comentario: "Ya tengo la moto de mis sueños a escala, ahora voy por la real",
        puntuacion: 5,
        precioMercadoLibre: 99898,
        precioMootscale: 84660,
      },
      {
        uriImage: "/images/DUCATI PANIGALE V4.webp",
        nombreMoto: "DUCATI PANIGALE V4",
        comentario: "Boff, esa moto es mas bonita en persona",
        puntuacion: 5,
        precioMercadoLibre: 130048,
        precioMootscale: 110210,
      },
      {
        uriImage: "/images/KTM RC8 BLANCA.webp",
        nombreMoto: "KTM RC8",
        comentario: "Gracias, muy bonita la moto",
        puntuacion: 5,
        precioMercadoLibre: 51920,
        precioMootscale: 44000,
      },
      {
        uriImage: "/images/KTM RC8 NEGRA.webp",
        nombreMoto: "KTM RC8",
        comentario: "Una moto muy buena y sobre todo económica",
        puntuacion: 5,
        precioMercadoLibre: 51920,
        precioMootscale: 44000,
      },
      {
        uriImage: "/images/BMW S1000RR NEGRA.webp",
        nombreMoto: "YAMAHA R1M",
        comentario: "La moto es hermosa, su color me encanta",
        puntuacion: 5,
        precioMercadoLibre: 110517,
        precioMootscale: 93658,
      },
      {
        uriImage: "/images/YAMAHA R1 NEGRA.webp",
        nombreMoto: "YAMAHA R1M",
        comentario: "La mejor moto que he tenido, es muy bonita",
        puntuacion: 5,
        precioMercadoLibre: 110517,
        precioMootscale: 93658,
      }
    ]

    export const products: IProductEcommerce[] = [
      {
        id: 1,
        name: "YAMAHA R1M",
        price: "110517",
        images: "/images/YAMAHA R1 NEGRA.webp",
        description: "La mejor moto que he tenido, es muy bonita",
        category: "motos",
        brand: "Yamaha",
        stock: 10
      },
      {
        id: 2,
        name: "BMW S1000RR",
        price: "110517",
        images: "/images/BMW S1000RR NEGRA.webp",
        description: "La mejor moto que he tenido, es muy bonita",
        category: "motos",
        brand: "BMW",
        stock: 10
      },{
        id: 3,
        name: "KAWASAKY NINJA 400",
        price: "104351",
        images: "/images/KAWASAKY NINJA 400.webp",
        description: "Me sorprendio el detalle de la moto, es muy bonita",
        category: "motos",
        brand: "Kawasaki",
        stock: 10
      },{
        id: 4,
        name: "Casco AGV",
        price: "150000",
        images: "data:image/jpeg;base64,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",
        description: "Casco de alta calidad para motociclistas",
        category: "cascos",
        brand: "AGV",
        stock: 20
      },{
        id: 5,
        name: "Casco Spartan",
        price: "150000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxbbS4t_ESHd5whuz-TgXyLi8rhdD4RmXBA&s",
        description: "Casco de alta calidad para motociclistas",
        category: "cascos",
        brand: "Spartan",
        stock: 20
      },{
        id: 6,
        name: "casco ich",
        price: "2000",
        images: "https://www.bsamotos.com.co/cdn/shop/files/Capturadepantalla2024-03-24210343.png?v=1711332543&width=1100",
        description: "Casco de alta calidad para motociclistas",
        category: "cascos",
        brand: "Ich",
        stock: 20
      },{
        id: 7,
        name: "Guantes de cuero",
        price: "3000",
        images: "data:image/jpeg;base64,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",
        description: "Guantes de cuero de alta calidad para motociclistas",
        category: "accesorios",
        brand: "Spartan",
        stock: 20
      },{
        id: 8,
        name: "Guantes de invierno",
        price: "4000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWZWkHacOYfW2c-dZdSviKjDD4Vt6Hfp9hQ&s",
        description: "Guantes de invierno de alta calidad para motociclistas",
        category: "accesorios",
        brand: "Spartan",
        stock: 20
      },{
        id: 9,
        name: "Guantes de verano",
        price: "2500",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EPfZyNVikYNZlV8XlpKa2z1ElToxDXBZ8ZNfh1kVEZQHUJByEXosK5AAtCY8onsXf3U&usqp=CAU",
        description: "Guantes de verano de alta calidad para motociclistas",
        category: "accesorios",
        brand: "Spartan",
        stock: 20
      },{
        id: 10,
        name: "gopro hero 10",
        price: "50000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeir5QaUgLMOGKve-9zv9CD7918At1m_WNLg&s",
        description: "Cámara de acción GoPro Hero 10, adecuada para los deportistas",
        category: "camaras",
        brand: "GoPro",
        stock: 15
      },{
        id: 11,
        name: "gopro hero 9",
        price: "40000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9CgPL_Y4dsDpYzDYSqQPNUiSVFRMtTGAww&s",
        description: "Cámara de acción GoPro Hero 9 lo mejor",
        category: "camaras",
        brand: "GoPro",
        stock: 15
      },{
        id: 12,
        name: "insta 360",
        price: "60000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAzZfG7p-fwgNq5LYzkMQSeo_jUY3iFrHyg&s",
        description: "Cámara de acción Insta 360, lo mejor",
        category: "camaras",
        brand: "Insta",
        stock: 15
      },{
        id: 13,
        name: "chaqueta cuerina",
        price: "8000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPXu_UvOQrCXNSJw-dI64WdgrZ3BCOGhAdA&s",
        description: "Chaqueta de cuero de alta calidad para motociclistas",
        category: "ropa",
        brand: "Spartan",
        stock: 20
      },{
        id: 14,
        name: "chaqueta de cuero",
        price: "12000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72XLE3LH_TZ0i2440scHCQivJU_ONW5m8vqtIv1PsJocpVX8VlYcOtN1CQVU9tJd0bbc&usqp=CAU",
        description: "Chaqueta de cuero de alta calidad para motociclistas",
        category: "ropa",
        brand: "Spartan",
        stock: 20
      },{
        id: 15,
        name: "chaqueta textil",
        price: "6000",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkv8Oil6KbSNhlcQ6iM9nUrKxBRZMyVK6Poa025ISh3qY-l5F-vhffbDbw_NoJmiizeGA&usqp=CAU",
        description: "Chaqueta textil de alta calidad para motociclistas",
        category: "ropa",
        brand: "Spartan",
        stock: 20
      }
    ]