import React from "react";
import { useState } from "react";

/*Compoenente que consta de dos columnas las cuales son izquierda y derecha, la izquierda es una imagen mia con la moto de fondo y la derecha son imagenes que a medida
que se haga Scroll estos productos como casco, guantes, chaqueta se pongan en la imagen de la izquierdaa medida que se hace scroll sobre el producto*/
const SliderProduct: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/images/helmet.png",
    "/images/gloves.png",
    "/images/jacket.png",
    "/images/boots.png",
    "/images/bike_accessories.png",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex h-full">
          {/* Columna izquierda - Imagen estática (NO se mueve) */}
          <div className="w-1/2 relative bg-gray-100">
            <img
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`Imagen principal ${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-medium">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          {/* Columna derecha - Solo esta parte hace scroll */}
          <div className="w-1/2 flex flex-col bg-gray-50">
            {/* Header fijo */}
            <div className="p-6 border-b border-gray-200 bg-white">
              <h2 className="text-2xl font-bold text-gray-800">Productos</h2>
              <p className="text-gray-600 text-sm mt-1">
                Scrollea para asignar el producto a darrwin Shein
              </p>
            </div>

            {/* Contenedor con scroll - SOLO ESTA PARTE SE MUEVE */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group ${
                    selectedImage === index
                      ? "ring-4 ring-blue-500 shadow-xl scale-[1.02]"
                      : "hover:shadow-lg hover:scale-[1.01]"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-colors duration-200 ${
                      selectedImage === index
                        ? "bg-blue-500/20"
                        : "bg-black/0 group-hover:bg-black/10"
                    }`}
                  />

                  {/* Número de imagen */}
                  <div className="absolute top-2 right-2 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-bold">
                    {index + 1}
                  </div>

                  {/* Indicador de selección */}
                  {selectedImage === index && (
                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ✓ Activa
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
