import Layout from '../layout/Layout';

const QuienesSomos = () => {
  return (
    <Layout>
      <div className="bg-cream py-10">
        <div className="container mx-auto px-4">
          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl font-cormorant text-center mb-6">
            ¡Bienvenidos a la Expo Boda y XV Años Irapuato!
          </h1>

          {/* Sección de introducción */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-600 mb-4">
              Somos organizadores de eventos en Irapuato con más de 5 años de experiencia, apasionados por hacer realidad los sueños de nuestros clientes. Ahora, estamos emocionados de presentar el primer evento dedicado a celebrar el amor, la alegría y los momentos inolvidables.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestra expo reúne a los mejores proveedores y expertos en bodas y XV años, todo en un solo lugar para ayudarte a planear ese día tan especial.
            </p>
            <p className="text-gray-600 mb-4">
              Descubre las últimas tendencias en moda, decoración, fotografía, catering y mucho más. Ya sea que estés organizando tu boda soñada o preparando una celebración de XV años espectacular, aquí encontrarás inspiración y soluciones personalizadas.
            </p>
            <p className="text-gray-600 mb-4">
              Ven y vive la experiencia de la Expo Boda y XV Años Irapuato. Conoce a los profesionales que harán realidad tus ideas, participa en actividades especiales y disfruta de un ambiente lleno de magia y creatividad.
            </p>
            <p className="text-gray-600 mb-4">
              ¡Te esperamos para hacer de tu evento un recuerdo inolvidable!
            </p>
          </div>

          

          {/* Sección de información destacada */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna 1: Fecha y ubicación */}
              <div>
                <h2 className="text-2xl font-cormorant mb-4">Información del Evento</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-bold">Fecha:</span> 4, 5 y 6 de Julio 2025
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Ubicación:</span> Inforum Irapuato
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Dirección:</span> Av. Siglo XXI 1156, Predio Los Sauces, 36547 Irapuato, Gto.
                  </p>
                </div>
              </div>



              {/* Columna 2: Organizadores y contacto */}
              <div>
                <h2 className="text-2xl font-cormorant mb-4">Organizadores</h2>
                <p className="text-gray-600 mb-4">
                  Un esfuerzo conjunto del Gobierno de Guanajuato y el Municipio de Irapuato para apoyar a las parejas y promover el talento local.
                </p>
                <h3 className="text-xl font-cormorant mb-2">Contacto</h3>
                <p className="text-gray-600">
                  <span className="font-bold">Correo:</span> Evnt.11@hotmail.com
                </p>
              </div>
            </div>

     
                          {/* Mapa de Google Maps */}
            <div className="mt-8">
              <h2 className="text-2xl font-cormorant mb-4">¿Cómo llegar?</h2>
              <div className="overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.786351414741!2d-101.3373446!3d20.718898599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b7ffddfe82833%3A0x27620187f94f018!2sPredio%2C%20Av.%20Siglo%20XXI%201156%2C%20Los%20Sauces%2C%2036547%20Irapuato%2C%20Guanajuato!5e0!3m2!1ses-419!2smx!4v1742704539611!5m2!1ses-419!2smx"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuienesSomos;