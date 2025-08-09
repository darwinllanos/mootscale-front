import React from 'react';
import AutoSlider from '../components/AutoSlider';
import ProductCard from '../components/ProductCard';
import { IProduct } from '../interfaces/types';

const mainProducts: IProduct[] = [
    {
        id: 1,
        name: "KAWASAKI NINJA ZH2R",
        price: "$117.000 COP",
        images: "/images/Kawasaki ZH2R.webp",
    },
    {
        id: 2,
        name: "BMW S1000RR NEGRA",
        price: "$107.667 COP",
        images: "/images/BMW S1000RR NEGRA.webp",
    },
    {
        id: 3,
        name: "Yamaha R1 NEGRA",
        price: "$105.807 COP",
        images: "/images/YAMAHA R1 NEGRA.webp",
    }
    ];

    const sliderProducts: IProduct[] = [
    {
        id: 4,
        name: "DUCATI PANIGALE V4",
        price: "$110.210 COP",
        images: "/images/DUCATI PANIGALE V4.webp",
    },
    {
        id: 5,
        name: "HONDA CB1000RR ROJA",
        price: "$85.000 COP",
        images: "/images/HONDA CB1000RR ROJA.webp",
    },
    {
        id: 6,
        name: "KTM SUPERDUKE 1290 GRIS",
        price: "$90.000 COP",
        images: "/images/KTM SUPERDUKE 1290 GRIS.webp",
    },
    {
        id: 7,
        name: "KTM RC8 BLANCA",
        price: "$44.000 COP",
        images: "/images/KTM RC8 BLANCA.webp",
    },
    {
        id: 8,
        name: "KAWASAKI NINJA 400",
        price: "$89.000 COP",
        images: "/images/KAWASAKY NINJA 400.webp",
    },
]



const Offer: React.FC = () => {
    return (
        <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal de productos */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Producto principal grande */}
          <div className="lg:col-span-2">
            <ProductCard product={mainProducts[0]} isLarge={true} />
          </div>

          {/* Productos secundarios */}
          <div className="grid grid-rows-2 gap-6">
            <ProductCard product={mainProducts[1]} />
            <ProductCard product={mainProducts[2]} />
          </div>
        </div>

        {/* Slider automático */}
        <div className="mt-8">
          <AutoSlider products={sliderProducts} />
        </div>
      </div>
    </div>
    );
}

export default Offer;