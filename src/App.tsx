"use client"

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MotorcycleSlider from './components/slider'
import Category from './pages/Category'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Offer from './pages/Offer'
import NotFound from './notfound'
import SliderHome from './components/SliderHome'
import CategoryComponent from './components/Category'
import Footer from './components/Footer'

function App() {

   const motorcycleData = [
      {
        uriImage: "/images/BMW S1000RR BLANCO.png",
        nombreMoto: "BMW S1000RR",
        comentario: "Muy bonita la moto me gusto bastante",
        puntuacion: 5,
        precioMercadoLibre: 111345,
        precioMootscale: 94360,
      },
      {
        uriImage: "/images/APRILIA.png",
        nombreMoto: "Aprilia RSVA RR1000",
        comentario: "El diseno escarchado de la moto es genial",
        puntuacion: 4,
        precioMercadoLibre: 110016,
        precioMootscale: 93234,
      },
      {
        uriImage: "/images/YAMAHA R1 AZUL.png",
        nombreMoto: "YAMAHA R1",
        comentario: "Excelente relación calidad-precio, la moto es genial",
        puntuacion: 5,
        precioMercadoLibre: 129654,
        precioMootscale: 109876,
      },
      {
        uriImage: "/images/KTM SUPERDUKE 1290 NEGRA.png",
        nombreMoto: "KTM SUPERDUKE 1290",
        comentario: "Gracias por la gestion, esta bonita la moto",
        puntuacion: 5,
        precioMercadoLibre: 106583,
        precioMootscale: 90325,
      },
      {
        uriImage: "/images/KTM SUPERDUKE 1290 NARANJA.png",
        nombreMoto: "KTM SUPERDUKE 1290",
        comentario: "Me encanato la moto, es muy bonita",
        puntuacion: 4,
        precioMercadoLibre: 106583,
        precioMootscale: 90325,
      },
      {
        uriImage: "/images/Kawasaki ZH2R.png",
        nombreMoto: "KAWASAKY H2R",
        comentario: "La mejor compra que pueden hacer, es una moto espectacular",
        puntuacion: 5,
        precioMercadoLibre: 83946,
        precioMootscale: 71140,
      },
      {
        uriImage: "/images/KAWASAKY NINJA 400.png",
        nombreMoto: "KAWASAKY NINJA 400",
        comentario: "Me sorprendio el detalle de la moto, es muy bonita",
        puntuacion: 4,
        precioMercadoLibre: 104351,
        precioMootscale: 88433,
      },
      {
        uriImage: "/images/HONDA CB1000RR ROJA.png",
        nombreMoto: "HONDA CBR1000RR",
        comentario: "Son muy similares a la real, me gusta mucho",
        puntuacion: 4,
        precioMercadoLibre: 99898,
        precioMootscale: 84660,
      },
      {
        uriImage: "/images/HONDA CB1000RR AZUL.png",
        nombreMoto: "HONDA CBR1000RR",
        comentario: "Ya tengo la moto de mis sueños a escala, ahora voy por la real",
        puntuacion: 5,
        precioMercadoLibre: 99898,
        precioMootscale: 84660,
      },
      {
        uriImage: "/images/DUCATI PANIGALE V4.png",
        nombreMoto: "DUCATI PANIGALE V4",
        comentario: "Boff, esa moto es mas bonita en persona",
        puntuacion: 5,
        precioMercadoLibre: 130048,
        precioMootscale: 110210,
      },
      {
        uriImage: "/images/KTM RC8 BLANCA.png",
        nombreMoto: "KTM RC8",
        comentario: "Gracias, muy bonita la moto",
        puntuacion: 5,
        precioMercadoLibre: 51920,
        precioMootscale: 44000,
      },
      {
        uriImage: "/images/KTM RC9 NEGRA.png",
        nombreMoto: "KTM RC8",
        comentario: "Una moto muy buena y sobre todo económica",
        puntuacion: 5,
        precioMercadoLibre: 51920,
        precioMootscale: 44000,
      },
      {
        uriImage: "/images/BMW S1000RR NEGRA.png",
        nombreMoto: "YAMAHA R1M",
        comentario: "La moto es hermosa, su color me encanta",
        puntuacion: 5,
        precioMercadoLibre: 110517,
        precioMootscale: 93658,
      },
    ]

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element=""/>
          <Route path='/categorias' element={<Category />} />
          <Route path='/sobreNosotros' element={<AboutUs />} />
          <Route path='/contactanos' element={<Contact />} />
          <Route path='/ofertas' element={<Offer/>} />
          <Route path='/slider' element={<MotorcycleSlider motorcycles={motorcycleData} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <section>
          <SliderHome />
        </section>
        <section>
          <CategoryComponent />
        </section>
        <section>
          <Footer />
        </section>
    </>
  )
}

export default App
