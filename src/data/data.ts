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
        images: "/images/YAMAHA R1M.webp",
        description: "La mejor moto que he tenido, es muy bonita",
        category: "motos",
        brand: "Yamaha",
        stock: 10
      },
      {
        id: 2,
        name: "BMW S1000RR",
        price: "110517",
        images: "/images/BMW S1000RR.webp",
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
        images: "/images/Casco AGV.webp",
        description: "Casco de alta calidad para motociclistas",
        category: "cascos",
        brand: "AGV",
        stock: 20
      },{
        id: 5,
        name: "Casco Spartan",
        price: "150000",
        images: "/images/Casco Spartan.webp",
        description: "Casco de alta calidad para motociclistas",
        category: "cascos",
        brand: "Spartan",
        stock: 20
      },{
        id: 6,
        name: "casco ich",
        price: "2000",
        images: "/images/casco ich.webp",
        description: "Casco de alta calidad para motociclistas",
        category: "cascos",
        brand: "Ich",
        stock: 20
      },{
        id: 7,
        name: "Guantes de cuero",
        price: "3000",
        images: "/images/Guantes de cuero.webp",
        description: "Guantes de cuero de alta calidad para motociclistas",
        category: "accesorios",
        brand: "Spartan",
        stock: 20
      },{
        id: 8,
        name: "Guantes de invierno",
        price: "4000",
        images: "/images/Guantes de invierno.webp",
        description: "Guantes de invierno de alta calidad para motociclistas",
        category: "accesorios",
        brand: "Spartan",
        stock: 20
      },{
        id: 9,
        name: "Guantes de verano",
        price: "2500",
        images: "/images/Guantes de verano.webp",
        description: "Guantes de verano de alta calidad para motociclistas",
        category: "accesorios",
        brand: "Spartan",
        stock: 20
      },{
        id: 10,
        name: "gopro hero 10",
        price: "50000",
        images: "/images/gopro hero 10.webp",
        description: "Cámara de acción GoPro Hero 10",
        category: "camaras",
        brand: "GoPro",
        stock: 15
      },{
        id: 11,
        name: "gopro hero 9",
        price: "40000",
        images: "/images/gopro hero 9.webp",
        description: "Cámara de acción GoPro Hero 9",
        category: "camaras",
        brand: "GoPro",
        stock: 15
      },{
        id: 12,
        name: "insta 360",
        price: "60000",
        images: "/images/insta 360.webp",
        description: "Cámara de acción Insta 360",
        category: "camaras",
        brand: "Insta",
        stock: 15
      },{
        id: 13,
        name: "chaqueta cuerina",
        price: "8000",
        images: "/images/chaqueta cuerina.webp",
        description: "Chaqueta de cuero de alta calidad para motociclistas",
        category: "ropa",
        brand: "Spartan",
        stock: 20
      },{
        id: 14,
        name: "chaqueta de cuero",
        price: "12000",
        images: "/images/chaqueta de cuero.webp",
        description: "Chaqueta de cuero de alta calidad para motociclistas",
        category: "ropa",
        brand: "Spartan",
        stock: 20
      },{
        id: 15,
        name: "chaqueta textil",
        price: "6000",
        images: "/images/chaqueta textil.webp",
        description: "Chaqueta textil de alta calidad para motociclistas",
        category: "ropa",
        brand: "Spartan",
        stock: 20
      }
    ]