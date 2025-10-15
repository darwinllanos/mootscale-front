import React from "react";
import { products } from "../data/data";
import Card from "../components/Card";

const categorias: string[] = [
  "/icons/camara.webp",
  "/icons/casco.webp",
  "/icons/ropa.webp",
  "/icons/guante.webp",
  "/icons/moto.webp",
];

const categories = [
  { id: "todos", name: "Todos", icon: "🏠" },
  { id: "tecnologia", name: "Tecnología", icon: "💻" },
  { id: "deportes", name: "Deportes", icon: "⚽" },
  { id: "comida", name: "Comida", icon: "🍕" },
  { id: "viajes", name: "Viajes", icon: "✈️" },
]

const Category: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando Productos", searchTerm);
  };

  // const handleCategoryFilter = (categoryId: string) => {
  //   setActiveCategory("1");
  //   console.log("Filtrando por categoria:", categoryId);
  // };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Buscar Productos */}
        <div className="w-full lg:w-2/5 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center mb-6 mt-6 border border-gray-200">
          <form onSubmit={handleSearch} className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-primary">
              Buscar Productos
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar Productos ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-4 py-3 text-base w-full rounded-lg border border-primary focus:ring-2 focus:ring-primary transition duration-200 shadow-sm"
              />
            </div>
          </form>
        </div>

        {/* Filtrar Por Categoria */}
        <div className="w-full lg:w-2/5 bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center mb-6 mt-6 border border-gray-200">
          <h2 className="font-bold text-2xl text-center text-primary mb-4">
            Filtrar Por Categoria
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer border transition duration-200
                        ${
                          activeCategory === categoria
                            ? "bg-primary text-white border-primary shadow-md"
                            : "bg-gray-50 text-black border-gray-200 hover:bg-primary hover:text-white hover:border-primary"
                        }
                    `}
                onClick={() => setActiveCategory(categoria)}
              >
                <img
                  src={categoria}
                  alt={`Categoria ${index}`}
                  className="h-14 mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
          <div className="bg-card rounded-lg p-6 border">
            <h3>
              Resultados para: {" "}
              {activeCategory === " " ? (
                <span className="font-bold"><Card products={products} /></span>
              ) : (
                <span className="font-bold">Productos en la categoria: {categories.find((cat) => cat.id === activeCategory)?.name}</span>
              )}
            </h3>
          </div>
        </div>

    </div>
  );
};

export default Category;
