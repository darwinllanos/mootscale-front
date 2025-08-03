import React from "react";

const AboutUs: React.FC = () => {
  return (
    <main>
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <section className="space-y-8">
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 leading-tight">
                Sobre Nosotros
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                <strong>MootScale</strong> nació con el propósito de inspirar a
                los amantes de las dos ruedas. Lo que comenzó como una pasión
                por las motos a escala, hoy se ha transformado en una plataforma
                completa para motociclistas. Desde miniaturas que representan la
                libertad hasta productos reales como cascos, ropa especializada,
                cámaras de acción y accesorios para tu moto. Queremos ser el
                aliado perfecto para que vivas la pasión de conducir y
                coleccionar.
              </p>
            </section>
            <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Imagen superior derecha Poner GIF de la RC8 en escala y real (TIKTOK)*/}
              <div className="col-start-2 row-start-1">
                <img
                  src="/placeholder.svg?height=280&width=280"
                  alt="KTM RC8 a escala"
                  className="w-full h-[280px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* GIF de un casco girando */}
              <div className="col-start-1 row-start-2">
                <img
                  src="/placeholder.svg?height=300&width=280"
                  alt="Casco girando"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* GIF de camaras para motociclistas */}
              <div className="col-start-2 row-start-3">
                <img
                  src="/placeholder.svg?height=280&width=280"
                  alt="Cámaras para motociclistas"
                  className="w-full h-[280px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <section className="space-y-8">
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 leading-tight">
                Nuestra Mision
              </h3>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Queremos ser la tienda online de referencia para todos los
                motociclistas en Colombia, ofreciendo productos de calidad,
                marcas confiables y colaborando con tiendas aliadas para crear
                una comunidad de motociclistas conectados y apasionados.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 leading-tight">
                Nuestros Valores
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Nuestros valores son la pasión, la calidad y la comunidad.
                Creemos que cada motociclista merece productos que reflejen su
                amor por las dos ruedas y que inspiren a otros a unirse a esta
                emocionante aventura. En MootScale, no solo vendemos motos a
                escala, sino que también fomentamos una comunidad de entusiastas
                que comparten su pasión por las motocicletas.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-0">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <section className="space-y-8">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500 leading-tight">
                ¿Qué ofrecemos?
              </h3>
              <ul>
                <li>Motos a escala con detalles impresionantes</li>
                <li>Cascos certificados para máxima seguridad</li>
                <li>Ropa y guantes para motociclistas</li>
                <li>Cámaras de acción (GoPro, 360, etc.)</li>
                <li>Accesorios y repuestos</li>
              </ul>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500 leading-tight">
                ¿Qué nos hace diferentes?
              </h3>
              <ul>
                <li>
                  <strong>Inspiración y comunidad:</strong> No solo vendemos
                  productos, sino que creamos un espacio para los amantes de las
                  motos.
                </li>
                <li>
                  <strong>Calidad garantizada:</strong> Seleccionamos productos
                  de marcas confiables y con estándares de seguridad.
                </li>
                <li>
                  <strong>Atención personalizada:</strong> Te ayudamos a elegir
                  el producto perfecto para ti o para tu moto.
                </li>
                <li>
                  <strong>Variedad en un solo lugar:</strong> Desde miniaturas
                  hasta accesorios y cámaras, todo en una sola tienda.
                </li>
              </ul>
            </section>

            <section className="space-y-8">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500 leading-tight">
                ¿Por qué comprar en MootScale?
              </h3>
              <ul>
                <li>
                  <strong>Experiencia única:</strong> Nuestros productos están
                  pensados para inspirarte cada día.
                </li>
                <li>
                  <strong>Colección y estilo:</strong> Encuentra motos a escala,
                  ropa y accesorios para expresar tu pasión.
                </li>
                <li>
                  <strong>Regalos inolvidables:</strong> Sorprende a tus amigos
                  o familiares con artículos únicos.
                </li>
                <li>
                  <strong>Confianza:</strong> Somos una plataforma especializada
                  con soporte y asesoría.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <h5 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500 leading-tight text-center my-8">
        Unete a la comunidad MootScale y vive la pasion por las motos a escala
      </h5>

      <section className="flex content-center justify-center flex-wrap">
        <div className="group h-60 w-60 m-5">
          <div className="relative h-full w full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] bg-blue-600 rounded-xl ">
              <h2 className="text-xl w-full h-full font-bold rounded-xl object-cover shadow-xl shadow-black/40 text-slate-200 flex min-h-full flex-col items-center justify-center">
                Colecciona
              </h2>
            </div>
            <div className="absolute inset-0 h--full w-full rounded-xl bg-black-40 px-12 text-center  bg-blue-700 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-base">
                  Crea tu coleccion de motos a escala con modelos exclusivos,
                  llenos de historia y pasion por las dos ruedas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group h-60 w-60 m-5">
          <div className="relative h-full w full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] bg-blue-600 rounded-xl ">
              <h2 className="text-xl w-full h-full font-bold rounded-xl object-cover shadow-xl shadow-black/40 text-slate-200 flex min-h-full flex-col items-center justify-center">
                Inspiracion
              </h2>
            </div>
            <div className="absolute inset-0 h--full w-full rounded-xl bg-black-40 px-12 text-center  bg-blue-700 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-base">
                  Cada producto que ofrecemos busca inspirarte a vivir la
                  libertad y la aventura, ya sea en miniatura o en la carretera.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group h-60 w-60 m-5">
          <div className="relative h-full w full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] bg-blue-600 rounded-xl ">
              <h2 className="text-xl w-full h-full font-bold rounded-xl object-cover shadow-xl shadow-black/40 text-slate-200 flex min-h-full flex-col items-center justify-center">
                Detalles Impresionantes
              </h2>
            </div>
            <div className="absolute inset-0 h--full w-full rounded-xl bg-black-40 px-12 text-center  bg-blue-700 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-base">
                  Disenos y acabados realistas que sorprenden al mas exigente
                  coleccionista.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group h-60 w-60 m-5">
          <div className="relative h-full w full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 [backface-visibility:hidden] bg-blue-600 rounded-xl ">
              <h2 className="text-xl w-full h-full font-bold rounded-xl object-cover shadow-xl shadow-black/40 text-slate-200 flex min-h-full flex-col items-center justify-center">
                Atencion Personalizada
              </h2>
            </div>
            <div className="absolute inset-0 h--full w-full rounded-xl bg-black-40 px-12 text-center  bg-blue-700 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-base">
                  Te asesoramos para elegir el producto ideal y resolver
                  cualquier duda con un trato cercano y profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
