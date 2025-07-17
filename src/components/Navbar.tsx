import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Botón hamburguesa */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Contenido central */}
                    <div className="flex flex-1 flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center">
                        <div className="flex items-center">
                            <img className="h-8 w-auto mr-2" src="/mootscale.png" alt="MootScale" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/"  className="rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white">Inicio</Link>
                                <Link to="/slider" className='rounded-md px-3 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white'>Slider</Link>
                                <Link to="/slider" className="rounded-md px-3 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Ofertas</Link>
                                <Link to="/slider" className="rounded-md px-3 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Categorias</Link>
                                <Link to="/slider" className="rounded-md px-3 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Sobre Nosotros</Link>
                                <Link to="/slider" className="rounded-md px-3 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Contactanos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 text-center">
                        <a href="#" className="block rounded-md bg-blue-500 px-3 py-2 text-base font-medium text-white">Inicio</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Ofertas</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Categorias</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Sobre Nosotros</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-blue-500 hover:bg-blue-500 hover:text-white">Contactanos</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

