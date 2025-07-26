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
import SliderProduct from './components/SliderProduct'
import { motorcycleData } from './data/data'

function App() {
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

        <main>
          <section>
            <SliderHome />
          </section>
          <section>
            <CategoryComponent />
          </section>
          <section>
            <SliderProduct />
          </section>
          <section>
            <Footer />
          </section>
        </main>
    </>
  )
}

export default App
