import brideDress1 from '../../assets/images/saulmosqueda.webp';
import brideDress2 from '../../assets/images/liuliu-lenceria.jpg';
import saulMosqueda1 from '../../assets/images/saulMosqueda/SaulMosqueda1.jpg';
import saulMosqueda2 from '../../assets/images/saulMosqueda/SaulMosqueda2.jpg';
import saulMosqueda3 from '../../assets/images/saulMosqueda/saulMosqueda3.jpg';
import saulMosqueda4 from '../../assets/images/saulMosqueda/saulMosqueda4.jpg';

const dressVendors = [
  { name: 'Saul Mosqueda ', image: brideDress1, link: 'https://www.instagram.com/saul_mosqueda_/' },
  { name: 'Liu Liu lenceria ', image: brideDress2, link: 'https://www.instagram.com/liuliulenceria/' },

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
        En nuestra próxima edición, las mejores casas de novia y reconocidos diseñadores te sorprenderán con una amplia variedad de estilos, desde lo clásico y romántico hasta lo más innovador y audaz.        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dressVendors.map((vendor, index) => (
            <div
              key={index}
              className="relative overflow-hidden group" 
            >
                <a href={vendor.link} className="block" target="_blank" rel="noreferrer">
                  <div className="aspect-[3/4] overflow-hidden transition-transform group-hover:scale-105 group-hover:shadow-lg">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                </a>
                <h3 className="text-center mt-3 text-lg font-medium" >{vendor.name}</h3>
              </div>
            ))}

          {/* Placeholders for more vendors */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={`placeholder-${index}`} className="transition-transform hover:scale-105">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Proximamente</span>
              </div>
              <h3 className="text-center mt-3 text-lg font-medium">¡Invitado Sorpresa!</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h3 className="text-3xl font-cormorant mb-4">
            El Arte de Saul Mosqueda -  Elegancia Hecha a Medida          
          </h3>
          <p className="text-gray-600 mb-6">
            "Cada pieza de Saul Mosqueda es una narrativa de lujo y precisión. Especializado en bodas y eventos, su visión transforma telas en obras de arte, diseñadas para quienes buscan lo extraordinario."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* --- Tarjeta 1: Vestido de Novia --- */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={saulMosqueda1} // Reemplaza con tu imagen real
                  alt="Vestido de novia diseñado por Saul Mosqueda"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <p className="font-semibold text-gray-800">Alta Costura para Novias</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Vestidos únicos con detalles artesanales que destacan tu elegancia.
                  </p>
                </div>
              </div>

              {/* --- Tarjeta 2: Traje de Gala --- */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={saulMosqueda2}
                  alt="Traje de gala por Saul Mosqueda"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <p className="font-semibold text-gray-800">Trajes para Eventos Especiales</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Diseños femeninos con cortes impecables y acabados de lujo.
                  </p>
                </div>
              </div>

              {/* --- Tarjeta 3: Moda Nupcial (o Behind the Scenes) --- */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <img
                  src={saulMosqueda4}
                  alt="Proceso creativo de Saul Mosqueda"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <p className="font-semibold text-gray-800">Experiencia Personalizada</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Desde el boceto hasta la última puntada, cada pieza cuenta tu historia.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DressGallery;
