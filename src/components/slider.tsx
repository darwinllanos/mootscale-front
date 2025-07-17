"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

interface MotorcycleData {
  uriImage: string
  nombreMoto: string
  comentario: string
  puntuacion: number
  precioMercadoLibre: number
  precioMootscale: number
}

interface MotorcycleSliderProps {
  motorcycles: MotorcycleData[]
}

const MotorcycleSlider = ({ motorcycles }: MotorcycleSliderProps) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentMotorcycle = motorcycles[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % motorcycles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + motorcycles.length) % motorcycles.length)
  }

  return (
    <div className="w-full h-full bg-black text-white flex flex-col min-h-screen">
      {/* Precios en la parte superior */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8 pt-8">
        <div className="text-center">
          <h2 className="text-blue-400 font-bold text-xl md:text-2xl">MERCADO LIBRE</h2>
          <p className="text-white font-bold text-2xl md:text-4xl">
            {currentMotorcycle.precioMercadoLibre.toLocaleString()}COP
          </p>
        </div>

        {/* Sección de comentarios */}
        <div className="bg-white text-black rounded-lg p-3 w-full max-w-[300px]">
          <h3 className="font-bold text-lg">COMENTARIOS</h3>
          <div className="flex justify-between items-center">
            <p className="text-sm">{currentMotorcycle.comentario}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < currentMotorcycle.puntuacion ? "text-black" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-blue-400 font-bold text-xl md:text-2xl">MOOTSCALE</h2>
          <p className="text-white font-bold text-2xl md:text-4xl">
            {currentMotorcycle.precioMootscale.toLocaleString()} COP
          </p>
        </div>
      </div>

      {/* Nombre de la moto
      <h2
        className="text-center text-5xl md:text-7xl font-bold my-4 tracking-wider text-white font-size-2xl"
        style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.7)" }}
      >
        {currentMotorcycle.nombreMoto}
      </h2> */}

      {/* Imagen de la moto con controles de navegación */}
      <div className="relative flex-1 flex items-center justify-center mt-4 px-4">
        <button onClick={prevSlide} className="absolute left-4 md:left-4 z-10 text-white" aria-label="Anterior">
          <ChevronLeft size={28} />
        </button>

        <div className="relative w-full max-w-[600px] h-auto max-h-[300px] md:max-h-[400-x] flex items-center justify-center">
          <img
            src={currentMotorcycle.uriImage || "/placeholder.svg"}
            alt={currentMotorcycle.nombreMoto}
            width={600}
            height={400}
            className="object-contain max-h-full w-full"
            
          />
        </div>

        <button onClick={nextSlide} className="absolute right-4 z-10 text-white" aria-label="Siguiente">
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Logo y slogan */}
      <div className="text-center my-6">
        <h2 className="text-blue-400 text-3xl font-bold">MootScale</h2>
        <p className="text-blue-200">Inspirate cada día</p>
      </div>

      {/* Botones de acción */}
      {/*<div className="flex justify-between px-8 pb-8 gap-4">
        <button  className="flex-1 rounded-full border-white text-white hover:bg-white/10">
          Habla con un asesor
        </button>
        <button className="flex-1 rounded-full bg-white text-black hover:bg-gray-200">Comprar</button>
      </div> */}
    </div>
  )
}

export default MotorcycleSlider