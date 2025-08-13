import type { IProductEcommerce } from "../interfaces/types";
// import Image from "next/image";

export const Card = ({ products }: { products: IProductEcommerce[] }) => {

    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 justify-center">
            Productos
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                products.map((product, index) => (
                    <div key={index} className="group relative bg-gray-100 rounded-lg overflow-hidden">
                        {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md"> */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                              <img src={product.images ?? "/placeholder.png"} alt={product.name} width={100} height={100} className="w-full h-full object-cover object-center"/>
                              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent">
                                <div className="absolute text-white bottom-2 right-3">
                                  <h3 className="font-bold">{"$" + product.price}</h3>
                                </div>
                              </div>
                            </div>
                        {/* </div> */}
                        <div className="mt-2">
                            <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.description}</p>
                        </div>
                        <button type="button" className="mt-2 w-full bg-gray-100 py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            La quiero
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Card;