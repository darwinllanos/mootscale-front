import React from "react";

const slides = [
  {
    id: 1,
    image: "/images/BMW S1000RR NEGRA.png",
    text: `Compra segura, precios competitivos, envío rápido.
    En MootScale encontrarás motos a escala 1:12, diseñadas con una calidad excepcional, a precios increíbles y con envíos seguros que garantizan la entrega de tu compra.
    Sorprende a esa persona especial con una réplica única que no solo será un juguete, sino también una fuente de inspiración y sueños para el futuro.
    ¿Qué esperas? Haz que ese regalo sea inolvidable y deja que una moto a escala sea el comienzo de algo mucho más grande.`,
  },
  {
    id: 2,
    image: "/images/KTM RC8 BLANCA.png",
    text: 'Colaboracion con DarwinShein, "Tus retos de hoy seran los triunfos del manana, DarwinShein nos comparte: Tener una moto a escala en casa es más que un simple adorno. Es un símbolo de inspiración, un recordatorio diario de que los desafíos de hoy se convertirán en los triunfos de mañana Haz como DarwinShein: elige tu moto a escala y transforma un juego en un motor de sueños y metas cumplidas.',
  },
  {
    id: 3,
    image: "/images/KAWASAKY NINJA 400.png",
    text: 'Quieres algo unico? Tambien personalizamos y disenamos tu moto con los colores y los detalles que elijas.'
  }
];

const sliderMoto: React.FC = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { image, text } = slides[current];

  return (
    <div className="flex items-center justify-center w-full min-h-[500px]">
      <button onClick={prevSlide} className="text-blue-600 text-3xl mr-4">
        ⬅️
      </button>

      <div className="flex flex-col md:flex-row items-center gap-6 max-w-6xl">
        <img
          src={image}
          alt="Moto"
          className="w-[400px] md:w-[500px] object-contain"
        />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left px-4">
          {text}
        </p>
      </div>

      <button onClick={nextSlide} className="text-black-600 text-3xl ml-4">
        ➡️
      </button>
    </div>
  );
};

export default sliderMoto;
