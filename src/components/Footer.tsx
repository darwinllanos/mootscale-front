import { Mail, MapPin, Phone, Facebook, Instagram} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import { subscribeHelper } from '../helpers/subscribe.helper';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async () => {
        try {
            const response = await subscribeHelper(email);
            setMessage(response.message || 'Suscripción exitosa!');
            setEmail('');
        }catch(error){
            if (typeof error === 'object' && error !== null && 'message' in error) {
                setMessage((error as { message?: string }).message || 'Ocurrió un error al suscribirse.');
            } else {
                setMessage('Ocurrió un error al suscribirse.');
            }
        }
    }

    return(
        <footer className="bg-amber-50 text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gab-8 mb-8 flex">
                    <div className="space-y-4">
                        <h2 className="text-blue-400 text-2xl font-bold mb-6">MootScale</h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-blue-400 text-xl" />
                                <span className='text-gray-600'>Bogota, Colombia</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Phone className="text-blue-400 text-xl" />
                                <span className='text-gray-600'>+57 316 3746711</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail className="text-blue-400 text-xl" />
                                <span className='text-gray-600'>mootscale@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className='text-xl font-semibold mb-6 text-blue-400'>Productos</h3>
                        <div className='space-y-3'>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Cascos</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Motos Escala</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Ropa</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Accesorios</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Camaras</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className='font-semibold text-xl text-blue-400 mb-6'>Contenido Pagina</h3>
                        <div className='space-y-3'>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Inicio</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Slider</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Ofertas</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Categorias</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Sobre Nosotros</Link>
                            <Link to='/slider' className='block hover:text-blue-400 transition-colors text-gray-600'>Contactanos</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a href="https://web.facebook.com/mootscale.scale" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook" target="_blank">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/mootscale/" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Instagram" target='_blank'>
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://www.tiktok.com/@mootscale" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="TikTok" target='_blank'>
                                <ReactSVG src="/icons/IconTikTok.svg"/>
                            </a>
                            <a href="https://listado.mercadolibre.com.co/_CustId_2189361922?item_id=MCO2889724392&category_id=MCO3398&seller_id=2189361922&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" className='text-gray-400 hover:text-blue-400 transition-colors' aria-label='Mercado Libre' target='_blank'>
                                <ReactSVG src="/icons/IconML.svg" className="w-6 h-6"/>
                            </a>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo Electrónico"
                                className="px-4 py-2 bg-white ring-2 ring-blue-400 text-gray-800 rounded-l-md flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button onClick={handleSubscribe} className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors font-medium">
                                Suscribirse
                            </button>
                            {message && (
                                <p className="mt-2 text-sm text-blue-500 font-medium">{message}</p>
                )}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mt-8 text-gray-400 text-sm">
                        <p>
                            Copyright © 2025 MootScale | Designed by{" DARWINDEV "}
                            <a href="#" className="text-blue-400 hover:underline">
                            MootScale
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer