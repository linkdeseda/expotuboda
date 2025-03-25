import program from '../../assets/images/program.jpeg';
import wedding from '../../assets/images/program.jpeg'; // Icono/illustración de boda
import quinceanera from '../../assets/images/program.jpeg'; // Icono de XV
import raffle from '../../assets/images/program.jpeg'; // Icono de rifa

const Program = () => {
  return (
    <section className="py-12 px-4 bg-gray-50" id="programa">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-2 text-gold">
          Programa Preliminar
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Exposición de Bodas y XV Años • 4, 5 y 6 de Julio 2025 • ¡Próximamente más detalles!
        </p>

        {/* Grid de 3 días */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* --- Día 1: Viernes 4 --- */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-cormorant mb-4 text-center border-b pb-2">Viernes 4</h3>
            <div className="flex items-start mb-4">
              <img
                src={wedding}
                alt="Inauguración"
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">Inauguración</h4>
                <p className="text-gray-600">5:00 PM</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Apertura de stands (moda nupcial, joyería, banquetes).
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Charlas con diseñadores.
              </li>
            </ul>
          </div>

          {/* --- Día 2: Sábado 5 --- */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-cormorant mb-4 text-center border-b pb-2">Sábado 5</h3>
            <div className="flex items-start mb-4">
              <img
                src={quinceanera}
                alt="Desfile XV"
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">Desfile de XV Años</h4>
                <p className="text-gray-600">2:00 PM y 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <img
                src={raffle}
                alt="Rifa XV"
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">Rifa: Paquete de XV</h4>
                <p className="text-gray-600">4:00 PM</p>
              </div>
            </div>
          </div>

          {/* --- Día 3: Domingo 6 --- */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-cormorant mb-4 text-center border-b pb-2">Domingo 6</h3>
            <div className="flex items-start mb-4">
              <img
                src={wedding}
                alt="Desfile Bodas"
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">Desfile de Bodas</h4>
                <p className="text-gray-600">1:00 PM y 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <img
                src={raffle}
                alt="Rifa Boda"
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">Rifa: Paquete de Boda</h4>
                <p className="text-gray-600">6:30 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">* Programa sujeto a cambios.</p>
          </div>
        </div>

        {/* Nota final */}
        <div className="mt-10 text-center bg-gold/10 p-4 rounded-lg">
          <p className="text-gray-700">
            Estamos preparando sorpresas especiales. ¡Síguenos en redes para actualizaciones!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Program;