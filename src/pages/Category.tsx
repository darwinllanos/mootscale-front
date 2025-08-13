import React from "react";
import { products } from "../data/data";
import Card from "../components/Card";

const categorias: string[] = ["/icons/camara.webp", "/icons/casco.webp", "/icons/ropa.webp", "/icons/guante.webp", "/icons/moto.webp"]
const Category: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [activeCategory, setActiveCategory] = React.useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Buscando Productos")
    }

    return (
        <div>
            <div className="w-1/3 justify-center mx-auto mb-6">
                <form onSubmit={handleSearch}>
                    <div className="relative">
                        <input type="text" placeholder="Buscar Productos ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-3 text-base w-full rounded-lg border-2 focus:border-primary transition-colors"/>
                    </div>
                </form>
            </div>

            <div className="w-full">
                <h2 className="font-bold text-2xl">Filtrar Por Categoria</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {
                        categorias.map((categoria, index) => (
                            <div key={index} className={`flex items-center justify-center p-2 border rounded-lg ${activeCategory === categoria ? "bg-primary text-white" : "bg-white text-black"}`} onClick={() => setActiveCategory(categoria)}>
                                <img src={categoria} alt={`Categoria ${index}`} className="w-8 h-8 mr-2" />
                                <span className="font-medium">Categoria {index + 1}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Card products={products} />
        </div>
    );
}

export default Category;