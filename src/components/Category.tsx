import React from 'react';

const CategoryComponent: React.FC = () => {

    const categorias: string[] = ["/icons/camara.png", "/icons/casco.png", "/icons/ropa.png", "/icons/guante.png", "/icons/moto.png"]
    return(
        <div className='relative w-full bg-blue-500 overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)]'>
            <div className="absolute top-0 left-0 w-full h-16 drop-shadow-black">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,0 C300,60 600,60 900,30 C1050,10 1150,20 1200,40 L1200,0 Z" fill="white" />
                </svg>
            </div>

            <div className='relative z-10 py-16 px-4'>
                <h2 className='text-white text-xl font-bold text-center mb-12'>Categorias</h2>

                <div className='flex justify-center items-center gap-6 flex-wrap max-w-4xl mx-auto'>
                    {categorias.map((categoria, index) => (
                        <div
                            key={index}
                            className='w-35 h-35 bg-white rounded-full flex justify-center items-center'
                        >
                            <img src={categoria} alt={categoria} className='h-16 object-contain'/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/10 to-transparent z-10">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M0,120 C300,60 600,60 900,90 C1050,110 1150,100 1200,80 L1200,120 Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default CategoryComponent;