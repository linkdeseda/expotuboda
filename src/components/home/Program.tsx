import program from '../../assets/images/program.jpeg';

const Program = () => {
  return (
    <section className="py-12 px-4" id="programa">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-2">
          Programa del evento
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Visita los stands de los expositores y asiste al desfile de vestidos y las presentaciones musicales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Saturday */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-cormorant mb-6 text-center">Sábado</h3>
            <div className="flex items-start mb-6">
              <img
                src={program}
                alt="Desfile de Vestidos"
                className="w-24 h-24 object-cover rounded mr-4"
              />
              <div>
                <h4 className="text-xl font-cormorant mb-2">Desfile de Vestidos de Novia, Pajes y Trajes de Novio</h4>
                <p className="text-gray-600">2:00pm & 6:00pm</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium mb-2">Actividades adicionales:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-1">Visita a stands - Durante todo el día</li>
                <li className="mb-1">Asesoría personalizada - 12:00pm a 7:00pm</li>
                <li>Sorteos y promociones - 4:00pm</li>
              </ul>
            </div>
          </div>

          {/* Sunday */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-cormorant mb-6 text-center">Domingo</h3>
            <div className="flex items-start mb-6">
              <div className="w-24 h-24 bg-gold rounded mr-4 flex items-center justify-center text-white">
                <span>Música</span>
              </div>
              <div>
                <h4 className="text-xl font-cormorant mb-2">Audiciones Musicales</h4>
                <p className="text-gray-600">5:30pm</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <img
                src={program}
                alt="Desfile de Vestidos"
                className="w-24 h-24 object-cover rounded mr-4"
              />
              <div>
                <h4 className="text-xl font-cormorant mb-2">Desfile de Vestidos de Novia, Pajes y Trajes de Novio</h4>
                <p className="text-gray-600">2:00pm & 6:00pm</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium mb-2">Actividades adicionales:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-1">Visita a stands - Durante todo el día</li>
                <li className="mb-1">Asesoría personalizada - 12:00pm a 7:00pm</li>
                <li>Anuncio de ganadores - 7:00pm</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-beige bg-opacity-30 p-6 rounded-lg">
          <h3 className="text-2xl font-cormorant mb-4 text-center">Expositores</h3>
          <p className="text-center mb-4">La Expo más grande en México con todo lo que necesitas para tu boda.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h4 className="font-medium mb-2">Belleza y Salud</h4>
              <ul className="text-sm text-gray-600">
                <li>Maquillaje</li>
                <li>Peinado</li>
                <li>Spa</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Foto y Video</h4>
              <ul className="text-sm text-gray-600">
                <li>Fotografía</li>
                <li>Videografía</li>
                <li>Cabinas de fotos</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Vestidos y Trajes</h4>
              <ul className="text-sm text-gray-600">
                <li>Vestidos de Novia</li>
                <li>Vestidos de Dama</li>
                <li>Trajes de Novio</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-medium mb-2">Viajes</h4>
              <ul className="text-sm text-gray-600">
                <li>Luna de Miel</li>
                <li>Bodas en Playa</li>
                <li>Paquetes Turísticos</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="/listado-de-expositores"
              className="text-rust hover:text-gold transition-colors"
            >
              Ver Listado Completo de Expositores →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
