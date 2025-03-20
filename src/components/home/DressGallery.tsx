import brideDress1 from '../../assets/images/bride-dress-1.jpeg';
import brideDress2 from '../../assets/images/bride-dress-2.jpeg';

const dressVendors = [
  { name: 'Bridenformal', image: brideDress1, link: '/vestidos-de-novia/bridenformal' },
  { name: 'Novias de España', image: brideDress2, link: '/vestidos-de-novia/novias-de-espana' },
  // You can add more vendors as needed
];

const DressGallery = () => {
  return (
    <section className="py-12 bg-cream px-4" id="vestidosdenovia">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-2">
          Gran Desfile de Vestidos de Novia
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Casas de Novia & Diseñadores con miles de vestidos y gran variedad de estilos en exhibición en nuestra próxima Edición.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dressVendors.map((vendor, index) => (
            <div key={index} className="transition-transform hover:scale-105">
              <a href={vendor.link} className="block">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-center mt-3 text-lg font-medium">{vendor.name}</h3>
              </a>
            </div>
          ))}

          {/* Placeholders for more vendors */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={`placeholder-${index}`} className="transition-transform hover:scale-105">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Más Vestidos</span>
              </div>
              <h3 className="text-center mt-3 text-lg font-medium">Casa de Novias</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h3 className="text-2xl font-cormorant mb-4">
            Participa: Dinámica Compra & Gana para obtener regalos.
          </h3>
          <p className="text-gray-600 mb-6">
            Vestido de Novia, Argollas de Matrimonio y un Viaje de 3 días, 2 noches Todo Incluido en Riviera Maya.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded shadow p-4">
              <img
                src={brideDress1}
                alt="Vestido de Novia"
                className="w-full h-32 object-cover mb-3"
              />
              <p className="text-sm">BridenFormal - Regala vale para tu Vestido de Novia.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <img
                src={brideDress2}
                alt="Argollas de Matrimonio"
                className="w-full h-32 object-cover mb-3"
              />
              <p className="text-sm">Tressor Joyeros - Regala argollas de matrimonio.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <div className="w-full h-32 bg-gold mb-3 flex items-center justify-center text-white">
                Riviera Maya
              </div>
              <p className="text-sm">3 días, 2 noches Todo Incluido en Riviera Maya.</p>
            </div>
          </div>

          <a
            href="/ganadores"
            className="inline-block mt-6 bg-rust hover:bg-gold text-white py-3 px-6 rounded-md transition-colors"
          >
            Consulta Bases de la Trivia
          </a>
        </div>
      </div>
    </section>
  );
};

export default DressGallery;
