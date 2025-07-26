import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import type { IProduct } from "../interfaces/types";

const AutoSlider = ({ products }: { products: IProduct[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % products.length); 
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div className="relative overflow-hidden">
        <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
            {[...products, ...products].map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-1/3 flex-shrink-0 px-2">
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        </div>
    );
}

export default AutoSlider;