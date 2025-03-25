import CountdownTimer from '../shared/CountdownTimer';
import gallery from '../../assets/images/ladyHome1.jpg';

const Overview = () => {
  const targetDate = new Date('2025-07-04T00:00:00');

  return (
    <section className="py-12 px-4" id="laexpo">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-4">
        ¡Bienvenidos a la Expo Boda y XV Años Irapuato!
        </h2>
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-4">
        Descubre tendencias, descuentos exclusivos y los mejores expositores en Expo Boda Event Irapuato.
        </h2>

        <CountdownTimer targetDate={targetDate} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <img
              src={gallery}
              alt="Expo Me Caso Gallery"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-cormorant italic mb-4">
              Asiste a la mejor Expo para organizar toda tu Boda
            </h3>
            <p className="mb-4">
            Somos organizadores de eventos en Irapuato con más de 5 años de experiencia, apasionados por hacer realidad los sueños de nuestros clientes. Ahora, estamos emocionados de presentar el primer evento dedicado a celebrar el amor, la alegría y los momentos inolvidables.           
            </p>
            <p className="mb-4">
             Nuestra expo reúne a los mejores proveedores y expertos en bodas y XV años, todo en un solo lugar para ayudarte a planear ese día tan especial. 
            </p>

              <p  className="mb-4">
                Descubre las últimas tendencias en moda, decoración, fotografía, catering y mucho más. Ya sea que estés organizando tu boda soñada o preparando una celebración de XV años espectacular, aquí encontrarás inspiración y soluciones personalizadas.           
              </p>
            <div className="mb-6">
              <p  className="mb-4">
                Ven y vive la experiencia de la Expo Boda y XV Años Irapuato. Conoce a los profesionales que harán realidad tus ideas, participa en actividades especiales y disfruta de un ambiente lleno de magia y creatividad.              
              </p>
              <p  className="mb-4">
                ¡Te esperamos para hacer de tu evento un recuerdo inolvidable!              
              </p>
              <h4 className="font-bold mb-2 text-center">FECHA: 4,5 y 6 de Julio  </h4>
              <h4 className="font-bold mb-2 text-center">UBICACIÓN: Inforum Irapuato. </h4>
              <div className="mt-8">
              <div className="overflow-hidden rounded-lg text-center">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.786351414741!2d-101.3373446!3d20.718898599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b7ffddfe82833%3A0x27620187f94f018!2sPredio%2C%20Av.%20Siglo%20XXI%201156%2C%20Los%20Sauces%2C%2036547%20Irapuato%2C%20Guanajuato!5e0!3m2!1ses-419!2smx!4v1742704539611!5m2!1ses-419!2smx"
    width="80%"
    height="250"
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Fecha</h4>
            <p className="text-sm">Día de apertura 4 de Julio y finaliza el 6 de Julio </p>
          </div>
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Horario</h4>
            <p className="text-sm">Miercoles, Jueves & Viernes de 11:00am a 8:00pm</p>
          </div>
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Irapuato - Guanajuato</h4>
            <p className="text-sm">Av. Siglo XXI 1156, Predio Los Sauces, 36547 </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-rust hover:text-gold"
            >
              Ver como llegar
            </a>
          </div>
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Boletos</h4>
            <p className="text-sm"> ¡Completamente Gratis!</p>
            <a
              rel="noopener noreferrer"
              className="text-xs text-rust hover:text-gold"
            >
             No dejes pasar esta oportunidad
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Overview;
