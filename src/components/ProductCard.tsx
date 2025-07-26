import { IProduct } from "../interfaces/types"

const ProductCard = ({ product, isLarge = false }: { product: IProduct; isLarge?: boolean }) => {
    return (
         <div className={`relative bg-gray-900 rounded-lg overflow-hidden group cursor-pointer ${isLarge ? "h-80" : "h-64"}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={product.images || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white font-medium mb-2">{product.name}</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{product.price}</span>
            </div>
        </div>
    );
}

export default ProductCard;