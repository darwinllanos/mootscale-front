import React from "react";

const AboutUs: React.FC = () => {
    return (
        <main>
            <section>
                <h3>Sobre Nosotros</h3>
                <p>
                    <strong>MootScale</strong> nació con el propósito de inspirar a los amantes de las dos ruedas. 
                    Lo que comenzó como una pasión por las motos a escala, hoy se ha transformado en una plataforma completa para 
                    motociclistas. Desde miniaturas que representan la libertad hasta productos reales como cascos, ropa especializada, 
                    cámaras de acción y accesorios para tu moto.  
                    Queremos ser el aliado perfecto para que vivas la pasión de conducir y coleccionar.
                </p>
            </section>
            <section>
                <h3>Nuestra Mision</h3>
                <p>
                    Queremos ser la tienda online de referencia para todos los motociclistas en Latinoamérica, ofreciendo 
                    productos de calidad, marcas confiables y colaborando con tiendas aliadas para crear una comunidad 
                    de motociclistas conectados y apasionados.
                </p>
            </section>
            <section>
            <h3>Lo que ofrecemos</h3>
                <ul>
                    <li>Motos a escala con detalles impresionantes</li>
                    <li>Cascos certificados para máxima seguridad</li>
                    <li>Ropa y guantes para motociclistas</li>
                    <li>Cámaras de acción (GoPro, 360, etc.)</li>
                    <li>Accesorios y repuestos</li>
                </ul>
            </section>
            <section>
  <h3>¿Qué nos hace diferentes?</h3>
  <ul>
    <li><strong>Inspiración y comunidad:</strong> No solo vendemos productos, sino que creamos un espacio para los amantes de las motos.</li>
    <li><strong>Calidad garantizada:</strong> Seleccionamos productos de marcas confiables y con estándares de seguridad.</li>
    <li><strong>Atención personalizada:</strong> Te ayudamos a elegir el producto perfecto para ti o para tu moto.</li>
    <li><strong>Variedad en un solo lugar:</strong> Desde miniaturas hasta accesorios y cámaras, todo en una sola tienda.</li>
  </ul>
</section>
            <section>
  <h3>¿Por qué comprar en MootScale?</h3>
  <ul>
    <li><strong>Experiencia única:</strong> Nuestros productos están pensados para inspirarte cada día.</li>
    <li><strong>Colección y estilo:</strong> Encuentra motos a escala, ropa y accesorios para expresar tu pasión.</li>
    <li><strong>Regalos inolvidables:</strong> Sorprende a tus amigos o familiares con artículos únicos.</li>
    <li><strong>Confianza:</strong> Somos una plataforma especializada con soporte y asesoría.</li>
  </ul>
</section>
            <h5>Unete a la comunidad MootScale y vive la pasion por las motos a escala</h5>
            <section>
                {/* Poner cuatro imagenes que al pasar por encima se de la vuelta la imagen y en esta se pueda leer el siguiente contenido */}
                <ol>
                    Colecciona: Crea tu coleccion de motos a escala con modelos exclusivos, llenos de historia y pasion por las dos ruedas
                    Inspiracion: Cada producto que ofrecemos busca inspirarte a vivir la libertad y la aventura, ya sea en miniatura o en la carretera.
                    Detalles impresionantes: Disenos y acabados realistas que sorprenden al mas exigente coleccionista.
                    Atencion Personalizada: Te asesoramos para elegir el producto ideal y resolver cualquier duda con un trato cercano y profesional.
                </ol>
            </section>
        </main>
    );
}

export default AboutUs;