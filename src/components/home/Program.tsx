import program from '../../assets/images/program.jpeg';
import inauguration from '../../assets/images/exposicionBodas.jpg' // Imagen corte de listón
import fashionShow from '../../assets/images/desfile.jpg'; // Imagen desfile
import raffleEvent from '../../assets/images/cierreEvento.webp' // Imagen rifa

const Program = () => {
  return (
    <section className="py-12 px-4 bg-gray-50" id="programa">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-2 text-gold">
          Programa del Evento
        </h2>
        <p className="text-center text-gray-600 mb-10">
          4, 5 y 6 de Julio 2025 • Exposición de Bodas y XV Años
        </p>

        {/* Grid de 3 días */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* --- Viernes 4 --- */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gold/20">
            <div className="relative h-48 mb-4 overflow-hidden rounded">
              <img
                src={inauguration}
                alt="Corte de listón"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-2xl font-cormorant mb-3 text-center">Viernes 4</h3>
            <p className="text-gold text-center mb-4 font-medium">3:00 PM – 7:00 PM</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Presentación de proveedores
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Corte de listón inaugural
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Expositores abiertos al público
              </li>
            </ul>
          </div>

          {/* --- Sábado 5 --- */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gold/20">
            <div className="relative h-48 mb-4 overflow-hidden rounded">
              <img
                src={fashionShow}
                alt="Desfile de moda"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-2xl font-cormorant mb-3 text-center">Sábado 5</h3>
            <p className="text-gold text-center mb-4 font-medium">1:00 PM – 6:00 PM</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Desfile de vestidos de novia
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Colecciones de XV años
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Exhibición de diseñadores
              </li>
            </ul>
          </div>

          {/* --- Domingo 6 --- */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gold/20">
            <div className="relative h-48 mb-4 overflow-hidden rounded">
              <img
                src={raffleEvent}
                alt="Rifa de concurso"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-2xl font-cormorant mb-3 text-center">Domingo 6</h3>
            <p className="text-gold text-center mb-4 font-medium">Horario por confirmar</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Desfiles de novias y XV años
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                Exhibición de diseñadores
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2 font-bold">•</span>
                <span className="font-medium">Rifa: Paquete de Boda y XV Años GRATIS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nota */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 italic">
            * Programación sujeta a cambios. Consulta horarios exactos en redes sociales.
          </p>
        </div>
      </div>


      { /*<div className="mt-12 bg-beige bg-opacity-30 p-6 rounded-lg">
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
        </div>*/}
    </section>
  );
};

export default Program;