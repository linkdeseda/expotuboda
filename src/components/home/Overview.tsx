import CountdownTimer from '../shared/CountdownTimer';
import gallery from '../../assets/images/dress-gallery.jpeg';

const Overview = () => {
  const targetDate = new Date('2025-06-01T00:00:00');

  return (
    <section className="py-12 px-4" id="laexpo">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-4">
        Descubre tendencias, descuentos exclusivos y los mejores expositores en Expo Tu Boda Irapuato.
        </h2>
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-4">
        ¡Participa en nuestra gran rifa y gana una boda de ensueño o un paquete para XV años!
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
              <strong>Expo Tu Boda</strong> se lleva a cabo en Irapuato, Guanajuato, siendo el evento que te ofrece la mayor cantidad y variedad de proveedores en un mismo lugar durante un fin de semana. 
            </p>

            <p  className="mb-4">
              Encuentra las últimas tendencias, inspírate para organizar tu boda y recibe asesoría de los expositores más prestigiados para hacer de ese día algo verdaderamente especial y único.
            </p>
            <div className="mb-6">
              <h4 className="font-bold mb-2 text-center">¡ENTRADA COMPLETAMENTE GRATIS!</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Fecha</h4>
            <p className="text-sm">Mayo 31 y Junio 1 / Aparta el Día</p>
          </div>
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Horario</h4>
            <p className="text-sm">Sábado & Domingo de 11:00am a 8:00pm</p>
          </div>
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">WTC CDMX</h4>
            <p className="text-sm">Calle Filadelfia, esquina con Dakota, Benito Juárez, Col. Nápoles</p>
            <a
              href="http://ExpoTuBoda.mx/como-llegar-a-ExpoTuBoda-wtc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-rust hover:text-gold"
            >
              Ver como llegar
            </a>
          </div>
          <div className="bg-cream p-4 text-center shadow-md">
            <h4 className="text-lg font-cormorant mb-1">Venta Boletos</h4>
            <p className="text-sm">$150 (antes de la expo). $160 (los días de la expo). ¡Aprovecha!</p>
            <a
              href="https://expo-me-caso-wtc-may31yjun1.boletia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-rust hover:text-gold"
            >
              Boletos en Línea (Antes de la expo)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
