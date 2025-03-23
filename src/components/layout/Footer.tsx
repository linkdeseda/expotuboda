import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Event Details */}
          <div>
            <h3 className="text-xl font-cormorant mb-4">DATOS DEL EVENTO</h3>
            <p className="mb-2">Lugar: WTC Ciudad de México</p>
            <p>Fecha: Mayo 31 y Julio 1, 2025</p>
          </div>

          {/* About Organizers */}
          <div>
            <h3 className="text-xl font-cormorant mb-4">SOBRE LOS ORGANIZADORES</h3>
            <p className="mb-4">
              OVALMEDIA y WTC Ciudad de México unen esfuerzos para la organización de este gran evento: Expo Tu boda. Más info en la siguiente liga:
              <Link to="/quienes-somos" className="block mt-2 text-gold hover:underline">
                ¿QUIENES SOMOS?
              </Link>
            </p>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-xl font-cormorant mb-4">UBICACIÓN Y CONTACTO</h3>
            <p className="mb-4">
              Av. Siglo XXI 1156, Predio Los Sauces, 36547 Irapuato, Gto.
            </p>
            <p className="mb-2">
              Nuestro equipo de atención al cliente está listo para ayudarte. ¡Escríbenos por WhatsApp!
            </p>
            <p className="mb-4">
              Correo: Evnt.11@hotmail.com
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 my-6">
          <a
            href="https://www.facebook.com/ExpoTuBoda/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rust w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-gold"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.instagram.com/ExpoTuBoda/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rust w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-gold"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://wa.me/528126365222/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rust w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-gold"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Footer Navigation */}
        <ul className="flex flex-wrap justify-center mb-4 space-x-4">
          <li>
            <Link to="/aviso-privacidad" className="text-white hover:text-gold">
              AVISO DE PRIVACIDAD
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          Expo Tu boda © 2025. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
