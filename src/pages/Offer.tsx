import React from 'react';
import AutoSlider from '../components/AutoSlider';
import ProductCard from '../components/ProductCard';
import { IProduct } from '../interfaces/types';

const mainProducts: IProduct[] = [
    {
        id: 1,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        images: "/images/tshirt-circles.png",
    },
    {
        id: 2,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        images: "/images/drawstring-bag.png",
    },
    {
        id: 3,
        name: "Acme Cup",
        price: "$15.00 USD",
        images: "/images/gray-cup.png",
    }
    ];

    const sliderProducts: IProduct[] = [
    {
        id: 4,
        name: "Acme Baby Onesie",
        price: "$10.00 USD",
        images: "/images/baby-onesie.png",
    },
    {
        id: 5,
        name: "Acme Baby Cap",
        price: "$10.00 USD",
        images: "/images/baby-cap.png",
    },
    {
        id: 6,
        name: "Acme Mug",
        price: "$15.00 USD",
        images: "/images/mug-wood.png",
    },
    {
        id: 7,
        name: "Acme Circles T-Shirt",
        price: "$20.00 USD",
        images: "/images/tshirt-circles.png",
    },
    {
        id: 8,
        name: "Acme Drawstring Bag",
        price: "$12.00 USD",
        images: "/images/drawstring-bag.png",
    },
]



const Offer: React.FC = () => {
    return (
        <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal de productos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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